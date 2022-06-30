import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { CartService } from 'src/app/service/cartService/cart.service';
import { HighlightDirective } from 'src/app/shared/directive/highlight.directive';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {
  @Input() products!: Product;
  message!: string;
  count = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.message = 'Added to Cart';
    this.cartService.changeMessage(this.message);
    this.count++;
  }

}
