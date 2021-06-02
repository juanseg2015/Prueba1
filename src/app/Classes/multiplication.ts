import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class Multiplication {
    multiply(first: number, second: number) {
        let result = 0;
        while (first) {
            if (first & 1) {
                result += second;
            }
            first >>= 1;
            second <<= 1;
        }
        return result;
    }
}