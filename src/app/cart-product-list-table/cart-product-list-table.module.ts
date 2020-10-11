import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductListTableItemsComponent } from './cart-product-list-table-items/cart-product-list-table-items.component';
import { RouterModule, Routes } from '@angular/router';
import { CartTotalListTableModule } from '../cart-total-list-table/cart-total-list-table.module';

const routes: Routes = [ 
  { path: '', component: CartProductListTableItemsComponent },
];
@NgModule({
  declarations: [CartProductListTableItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CartTotalListTableModule,
  ],
  exports:[
    CartProductListTableItemsComponent
  ]
})
export class CartProductListTableModule { }
