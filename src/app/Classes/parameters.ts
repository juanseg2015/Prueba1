import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class Parameters {
    getAvenger(nombre: string, poder?: string, arma = "arco") {
        var mensaje;
        if (poder) {
            mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        } else {
            mensaje = nombre + " tiene un " + poder
        }
        return mensaje;
    };
}
