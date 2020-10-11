import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-product-list-table-items',
  templateUrl: './cart-product-list-table-items.component.html',
  styleUrls: ['./cart-product-list-table-items.component.css']
})
export class CartProductListTableItemsComponent implements OnInit {

  cartList=[];
  constructor(private cartItemObj: CartService) { }

  ngOnInit(): void {
    console.log(this.cartItemObj.globalCartItems);
    this.cartList=this.cartItemObj.globalCartItems;
  }

}
