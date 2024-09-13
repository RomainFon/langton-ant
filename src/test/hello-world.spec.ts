import { hello } from '../main/hello-world';

describe('Hello World', () => {
  it('says hello world', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});
