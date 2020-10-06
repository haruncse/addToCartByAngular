import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartButtonItemComponent } from './add-to-cart-button-item/add-to-cart-button-item.component';



@NgModule({
  declarations: [AddToCartButtonItemComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AddToCartButtonItemComponent
  ]
})
export class AddToCartButtonModule { }
