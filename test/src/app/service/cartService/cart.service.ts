import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  messageSubject = new BehaviorSubject('');
  currentMessage = this.messageSubject.asObservable();

  countSubject = new BehaviorSubject(0);
  currentCount = this.countSubject.asObservable();
  constructor() { }

  changeMessage(message: string) {
    this.messageSubject.next(message);
  }

  changeCount(number: number) {
    this.countSubject.next(number);
    // localStorage.setItem('count', number);
  }
}
