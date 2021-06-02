import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Multiplication } from './Classes/multiplication';
import { ValidateObject } from './Classes/validate-object';
import { Parameters } from './Classes/parameters';
import { Rectangulo } from './Classes/rectangulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Prueba 1';
  multiplyResult = 0;
  validateResult = '';
  parametersResult = '';
  rectangleResult = 0;
  arrowFuncResult = 0;
  multiplyData = new FormGroup({
    first: new FormControl(0),
    second: new FormControl(0)
  });
  arrowFuncData = new FormGroup({
    first: new FormControl(0),
    second: new FormControl(0)
  });
  validateData = new FormGroup({
    search: new FormControl('')
  });
  parametersData = new FormGroup({
    name: new FormControl(),
    power: new FormControl(),
    weapon: new FormControl()
  });
  batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
  }
  rectangleData = new FormGroup({
    base: new FormControl(),
    height: new FormControl()
  });

  constructor(
    private multiplication: Multiplication,
    private validateObject: ValidateObject,
    private parameters: Parameters
  ) { }

  ngOnInit() {
    let nombre = "Ricardo Tapia";
    let edad = 23;
    const PERSONAJE = {
      nombre: nombre,
      edad: edad
    };
    console.log(PERSONAJE);

    PERSONAJE.nombre = 'Robin';
    PERSONAJE.edad = 13;

    console.log(PERSONAJE);
  }

  onArrowFunc() {
    let result = (a: number, b: number) => { return (a + b) * 2; }
    this.arrowFuncResult = result(this.arrowFuncData.controls['first'].value, this.arrowFuncData.controls['second'].value);
  }

  onMultiply() {
    this.multiplyResult = this.multiplication.multiply(this.multiplyData.controls['first'].value, this.multiplyData.controls['second'].value);
  }

  onValidate() {
    let result = '';
    if (this.validateObject.validateObject(this.batman, this.validateData.controls['search'].value)) {
      result = 'Existe el texto buscado';
    } else {
      result = 'No existe el texto buscado';
    }
    this.validateResult = result;
  }

  onParameters() {
    if (this.parametersData.controls['name'].value === null) {
      alert('Nombre es necesario');
    } else {
      if (this.parametersData.controls['power'].value === null && this.parametersData.controls['weapon'].value === null) {
        this.parametersResult = this.parameters.getAvenger(this.parametersData.controls['name'].value)
      } else if (this.parametersData.controls['weapon'].value === null) {
        this.parametersResult = this.parameters.getAvenger(this.parametersData.controls['name'].value, this.parametersData.controls['power'].value)
      } else {
        this.parametersResult = this.parameters.getAvenger(this.parametersData.controls['name'].value, this.parametersData.controls['power'].value, this.parametersData.controls['weapon'].value)
      }
    }
  }

  onRectangle() {
    let rectangle: Rectangulo;
    rectangle = new Rectangulo(this.rectangleData.controls['base'].value, this.rectangleData.controls['height'].value);
    this.rectangleResult = rectangle.area();
  }
}







