import { Rectangulo } from './rectangulo';

describe('Rectangulo', () => {
  it('should create an instance', () => {
    expect(new Rectangulo(Rectangulo.arguments.base, Rectangulo.arguments.altura)).toBeTruthy();
  });
});
