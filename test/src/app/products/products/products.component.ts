import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/productService/product.service';

export interface Data {

  products: Array<[]>;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // title!: string;
  // price!: number;
  // thumbnail!: string;
  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.productService.get().subscribe((data: any) => {
      console.log(data.products);
      this.products = data.products
      // this.products.forEach((element: any) => {
      //   console.log(element)
      //   this.title = element.title;
      //   console.log(this.title)
      //   this.price = element.price;
      //   this.thumbnail = element.thumbnail;
      // });
    });
    // console.log(this.title);
  }

}
