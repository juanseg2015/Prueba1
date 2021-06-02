import { Inject, Injectable } from '@angular/core';
import { Multiplication } from './multiplication';

@Injectable({
  providedIn: 'root'
})

export class Rectangulo {
  base: number;
  altura: number;
  
  constructor(@Inject(Number) base: number, @Inject(Number) altura: number) {
    this.base = base;
    this.altura = altura;
  }

  area() {
    let multiplication: Multiplication;
    multiplication = new Multiplication();
    let area = multiplication.multiply(this.base, this.altura);
    return area;
  }
}
