import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cartService/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  message!: string;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.currentMessage.subscribe((messsage: string) => {
      console.log(messsage)
      this.message = messsage;
    })
  }
}
