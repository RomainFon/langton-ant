export class LangtonAnt {

  private direction: Direction = Direction.West;
  private grid: Square[] = [new Square(0, 0, Color.White)];

  private movements: Record<Direction, (square: Square) => Square> = {
    [Direction.North]: this.moveUp,
    [Direction.East]: this.moveRight,
    [Direction.South]: this.moveDown,
    [Direction.West]: this.moveLeft,
  }

  private directions: Record<Direction, Direction> = {
    [Direction.North]: Direction.East,
    [Direction.East]: Direction.South,
    [Direction.South]: Direction.West,
    [Direction.West]: Direction.North
  }

  private colors: Record<Color, Color> = {
    [Color.Black]: Color.White,
    [Color.White]: Color.Black
  }

  getCurrentSquare(): Square {
    return this.grid.filter(square => square.current)[0];
  }

  move(numberOfMove: number = 1): void {
    for (let i = 0; i < numberOfMove; i++) {
      this.changeDirection();
      this.switchColor();
      this.moveForward();
    }
  }

  changeDirection(): void {
    this.direction = this.directions[this.direction];
  }

  moveUp(square: Square): Square {
    return new Square(square.x, square.y + 1, Color.White);
  }

  moveDown(square: Square): Square {
    return new Square(square.x, square.y -1, Color.White);
  }

  moveLeft(square: Square): Square {
    return new Square(square.x - 1, square.y, Color.White);
  }

  moveRight(square: Square): Square {
    return new Square(square.x + 1, square.y, Color.White);
  }

  moveForward(): void {
    const nextSquare = this.movements[this.direction](this.getCurrentSquare());
    this.getCurrentSquare().current = false;

    const existingSquare = this.grid.filter(square => square.x === nextSquare.x && square.y === nextSquare.y);

    if (existingSquare.length > 0) {
      existingSquare[0].current = true;
    } else {
      this.grid.push(nextSquare);
    }
  }

  switchColor(): void {
    this.getCurrentSquare().color = this.colors[this.getCurrentSquare().color];
  }

  getDirection() {
    return this.direction;
  }

  getGrid() {
    return this.grid;
  }

}

export class Square {
  x: number;
  y: number;
  color: Color;
  current: boolean;

  constructor(x: number, y: number, color: Color, current: boolean = true) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.current = current;
  }
}

export enum Direction {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W'
}

export enum Color { Black = 'Black', White = 'White' }

