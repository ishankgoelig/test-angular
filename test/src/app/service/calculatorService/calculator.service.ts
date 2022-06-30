import { Injectable } from '@angular/core';
import { LoggerService } from '../logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService) { }

  add(n1: number, n2: number) {
    this.loggerService.log('Add function called');
    return n1 + n2;
  }

  substract(n1: number, n2: number) {
    this.loggerService.log('Substract function called');
    if (n1 > n2) {
      return n1 - n2;
    } else {
      return n2 - n1;
    }
  }
}
