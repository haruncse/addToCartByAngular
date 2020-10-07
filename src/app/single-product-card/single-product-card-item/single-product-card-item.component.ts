import { Component, OnInit,Input } from '@angular/core';
import { products } from 'src/app/products';
import {MessengerService} from 'src/app/services/messenger.service';
import {CartService} from 'src/app/services/cart.service';

@Component({
  selector: 'app-single-product-card-item',
  templateUrl: './single-product-card-item.component.html',
  styleUrls: ['./single-product-card-item.component.css']
})
export class SingleProductCardItemComponent implements OnInit {
  products=products;
  cartItemList=[];
  @Input() productItem = products
  constructor(private msg: MessengerService,private cartItemObj: CartService) {  }

  ngOnInit(): void {
    this.cartItemList=this.cartItemObj.globalCartItems;
  }

  handleAddToCart(product){
    //console.log(product);
    this.msg.senMsg(product);
  }
}
