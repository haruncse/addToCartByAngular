import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {} from 'src/app/single-product-card/single-product-card-item/single-product-card-item.component';
import { ProductItemsComponent } from './product-items/product-items.component';

const routes: Routes = [ 
  { path: 'products/:productId', component: ProductItemsComponent },
  { path: '', loadChildren: () => import("./single-product-card/single-product-card.module").then(m => m.SingleProductCardModule), },

  //{ path: 'test', component: ProductItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductItemsComponent];
