import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { MessengerService } from '../services/messenger.service';
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  products = products;
  @Input() productItem;
  constructor(private activatedRoute: ActivatedRoute,private msg: MessengerService) { }
  singleProduct  ;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=> {
      //console.log(params.productId);
      this.singleProduct=products.find(el => el._id==params.productId); 
    })
  }
  handleAddToCart(product){
    //console.log(product);
    this.msg.senMsg(product);
  }
}
