import {Color, Direction, LangtonAnt, Square} from '../main/langton-ant';

// TODO:
// 1. Initialiser la grille avec la position initiale de la fourmi
// 2. Créer une méthode pour déplacer la fourmi depuis une case blanche
// 3. Créer une méthode pour déplacer la fourmi depuis une case noire
// 4. Rejouer l'itération



// x0y1 x1y1
// x0y0 x1y0

describe('Langton Ant', () => {
  it('Can get the initial position of the ant', () => {
    const langtonAnt = new LangtonAnt();
    const attemptSquare = new Square(0, 0, Color.White);
    expect(langtonAnt.getCurrentSquare()).toEqual(attemptSquare);
  });

  it('Can move the ant and get the change the direction of the ant', () => {
    const langtonAnt = new LangtonAnt();
    const attemptDirection = Direction.North;
    langtonAnt.move();
    expect(langtonAnt.getDirection()).toEqual(attemptDirection);
  });

  it('Can move twice the ant and get the change the direction of the ant', () => {
    const langtonAnt = new LangtonAnt();
    const attemptDirection = Direction.East;
    langtonAnt.move(2);
    expect(langtonAnt.getDirection()).toEqual(attemptDirection);
  });

  it('Can switch the color of the current square after ant moved', () => {
    const langtonAnt = new LangtonAnt();
    const attemptColor = Color.Black;
    langtonAnt.move();
    expect(langtonAnt.getGrid()[0].color).toEqual(attemptColor);
  });

  it('Can move the ant and get the new position of the ant', () => {
    const langtonAnt = new LangtonAnt();
    const attemptSquare = new Square(0, 1, Color.White, true);
    langtonAnt.move();
    expect(langtonAnt.getCurrentSquare()).toEqual(attemptSquare);
  });

  it('Can move the ant twice and get the new position of the ant', () => {
    const langtonAnt = new LangtonAnt();
    const attemptDirection = Direction.East;
    const attemptSquare = new Square(1, 1, Color.White, true);
    langtonAnt.move(2);
    expect(langtonAnt.getDirection()).toEqual(attemptDirection);
    expect(langtonAnt.getCurrentSquare()).toEqual(attemptSquare);
  });

  it('Can move the ant three times and get the new position of the ant', () => {
    const langtonAnt = new LangtonAnt();
    const attemptDirection = Direction.South;
    const attemptSquare = new Square(1, 0, Color.White, true);
    langtonAnt.move(3);
    expect(langtonAnt.getDirection()).toEqual(attemptDirection);
    expect(langtonAnt.getCurrentSquare()).toEqual(attemptSquare);
  });

  it('Can move the ant four times and get the new position of the ant', () => {
    const langtonAnt = new LangtonAnt();
    const attemptDirection = Direction.West;
    const attemptSquare = new Square(0, 0, Color.Black, true);
    langtonAnt.move(4);
    expect(langtonAnt.getDirection()).toEqual(attemptDirection);
    expect(langtonAnt.getCurrentSquare()).toEqual(attemptSquare);
  });
});
