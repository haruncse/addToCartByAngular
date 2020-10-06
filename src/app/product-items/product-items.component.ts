import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  products = products;
  constructor(private activatedRoute: ActivatedRoute) { }
  singleProduct  ;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=> {
      console.log(params.productId);
      this.singleProduct=products.find(el => el._id==params.productId); 
      /*products.forEach(item => {
        if(item._id==params.productId){
          this.singleProduct=item;
          //this.break;
        }
      });*/
    })
  }
}
