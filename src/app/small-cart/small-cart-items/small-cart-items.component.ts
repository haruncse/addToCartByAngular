import { Component, OnInit,Input } from '@angular/core';
import { from } from 'rxjs';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
//import {Product} from 'src/app/models/product';
//import { products } from 'src/app/products';

@Component({
  selector: 'app-small-cart-items',
  templateUrl: './small-cart-items.component.html',
  styleUrls: ['./small-cart-items.component.css']
})
export class SmallCartItemsComponent implements OnInit {
  @Input() cItem;
  cartItems = [];
  cartTotal = 0;
  itemFound = false;
  itemIndex=null;
  constructor(private msg: MessengerService, private cartDataAdd: CartService) { }
  ngOnInit() {
    this.cartItems = [];
    this.cartItems = this.cartDataAdd.globalCartItems;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
    //console.log(this.msg.getMsg());
    this.msg.getMsg().subscribe((product) => {
      //console.log("Get Message", product);
      this.cartItems = [];
      this.itemFound = false;
      this.itemIndex=-1;
      this.cartDataAdd.globalCartItems.forEach(cartData => {
        this.itemIndex++;
        if (cartData.productID == product['_id']) {
          this.itemFound = true;
          this.cartDataAdd.globalCartItems[this.itemIndex].qty+=1;
        }
      });

      if (!this.itemFound) {
        this.cartDataAdd.globalCartItems.push({
          productID: product['_id'],
          productName: product['title'],
          qty: 1,
          price: product['price'],
          imageURL: product['picture'],
          stock: product['stock']
        });
      }

      this.cartItems = [];
      this.cartItems = this.cartDataAdd.globalCartItems;
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price);
      });

    });


  }

  deleteCart(cart){
    //console.log(cart);
    this.itemIndex=-1;
    this.cartDataAdd.globalCartItems.forEach(cartData => {
      this.itemIndex++;
      if (cartData.productID == cart.productID) {
        this.cartDataAdd.globalCartItems.splice(this.itemIndex, 1);
      }
    });
  }
}
