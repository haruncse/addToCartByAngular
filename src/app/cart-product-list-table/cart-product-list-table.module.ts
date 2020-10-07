import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductListTableItemsComponent } from './cart-product-list-table-items/cart-product-list-table-items.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ 
  { path: 'cart', component: CartProductListTableItemsComponent },
];
@NgModule({
  declarations: [CartProductListTableItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    CartProductListTableItemsComponent
  ]
})
export class CartProductListTableModule { }
