import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SAuthService } from '../s-auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ShareItemService} from '../share-item.service';
import { SellerRegistrationComponent } from '../seller-registration/seller-registration.component'
import { SellerRegistrationService } from '../seller-registration.service';
import { PlaceOrder } from '../placeorder';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent {
  id: number = 0;
  sellers:any;
  totalPrice: number = 0;
  tprice: number =0;
  totalPricef:any;
  emptyArray: number[] = [];

  placeOrder : PlaceOrder = {
        orderId:0,
        time:'',
        date:'',
        longArray:[],
        userId:0,
};


constructor(private router: Router, private ser:ShareItemService,
private service:SellerRegistrationService) {}
ngOnInit(){
this.id = this.ser.getId()
let resp= this.service.getProductOfCart(this.id);
resp.subscribe((data) => this.sellers=data)
this.getTotal();
}

getTotal(){
  let resp= this.service.getTotalCart(this.id);
resp.subscribe((data) => this.totalPricef=data)
}
message:any;

placeOrderMethod(){

 this.orderUpdate();
  let resp=this.service.orderPlaced(this.placeOrder, this.id);
 resp.subscribe((data)=>this.message=data);
 window.alert("Order Placed, Refresh the page");
 this.reloadComponent();
}
mes:any;

orderUpdate(){
  let resp=this.service.userIdOrder(this.id);
 resp.subscribe((data)=>this.mes=data);
  
}
reloadComponent() {
  const currentRoute = this.router.url;
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentRoute]);
  });
}
}
