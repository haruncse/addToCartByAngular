import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductCardItemComponent } from './single-product-card-item/single-product-card-item.component';
import { RouterModule, Routes } from '@angular/router';
import { SmallCartModule } from '../small-cart/small-cart.module';

//import { products } from 'src/app/products';
const routes: Routes = [ 
  { path: '', component: SingleProductCardItemComponent },
];
@NgModule({
  declarations: [SingleProductCardItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SmallCartModule
  ],
  exports:[
    SingleProductCardItemComponent
  ]
})
export class SingleProductCardModule { }
