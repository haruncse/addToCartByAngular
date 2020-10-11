import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCartItemsComponent } from './small-cart-items/small-cart-items.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SmallCartItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports:[
    SmallCartItemsComponent
  ]
})
export class SmallCartModule { }
