import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import {AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

//import { ProductListComponent } from './product-list/product-list.component';
//import { ProductItemsComponent } from './product-items/product-items.component';

import {SmallCartModule} from './small-cart/small-cart.module';
import {DropDownListModule} from './drop-down-list/drop-down-list.module';
import {AddToCartButtonModule} from './add-to-cart-button/add-to-cart-button.module';
import {CartProductListTableModule} from './cart-product-list-table/cart-product-list-table.module';
import {CartTotalListTableModule} from './cart-total-list-table/cart-total-list-table.module';
import {SingleProductCardModule} from './single-product-card/single-product-card.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SmallCartModule,
    DropDownListModule,
    AddToCartButtonModule,
    CartProductListTableModule,
    CartTotalListTableModule,
    SingleProductCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
