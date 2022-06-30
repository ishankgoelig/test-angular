import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductsComponent } from './show-products/show-products.component';
import { PricePipe } from '../shared/pipe/price.pipe';
import { HighlightDirective } from '../shared/directive/highlight.directive';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },

];



@NgModule({
  declarations: [
    ProductsComponent,
    ShowProductsComponent,
    PricePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
