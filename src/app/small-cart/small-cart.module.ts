import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCartItemsComponent } from './small-cart-items/small-cart-items.component';

@NgModule({
  declarations: [SmallCartItemsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SmallCartItemsComponent
  ]
})
export class SmallCartModule { }
