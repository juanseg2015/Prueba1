import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class ValidateObject {
    validateObject(object: any, search: string): boolean {
        for (let key in object) {
            if (object[key].indexOf(search) != -1) return true;
        }
        return false;
    }
}
