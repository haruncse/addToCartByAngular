import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {} from 'src/app/single-product-card/single-product-card-item/single-product-card-item.component';
import { ProductItemsComponent } from './product-items/product-items.component';

const routes: Routes = [ 
  { 
    path: 'cart', 
    loadChildren: () => import("./cart-product-list-table/cart-product-list-table.module").then(m => m.CartProductListTableModule) 
  },
  { path: 'products/:productId', component: ProductItemsComponent },
  { path: '', loadChildren: () => import("./single-product-card/single-product-card.module").then(m => m.SingleProductCardModule), },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductItemsComponent];
