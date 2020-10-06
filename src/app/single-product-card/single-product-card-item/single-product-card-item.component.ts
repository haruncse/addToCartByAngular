import { Component, OnInit,Input } from '@angular/core';
import { products } from 'src/app/products';
import {MessengerService} from 'src/app/services/messenger.service';

@Component({
  selector: 'app-single-product-card-item',
  templateUrl: './single-product-card-item.component.html',
  styleUrls: ['./single-product-card-item.component.css']
})
export class SingleProductCardItemComponent implements OnInit {
  products=products;
  @Input() productItem = products
  constructor(private msg: MessengerService) {  }

  ngOnInit(): void {
  }

  handleAddToCart(product){
    //console.log(product);
    this.msg.senMsg(product);
  }
}
