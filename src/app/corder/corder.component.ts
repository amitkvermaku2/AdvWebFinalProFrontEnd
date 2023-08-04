import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SAuthService } from '../s-auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ShareItemService} from '../share-item.service';
import { SellerRegistrationComponent } from '../seller-registration/seller-registration.component'
import { SellerRegistrationService } from '../seller-registration.service';
import { OrderDetailSeller } from '../orderdetailseller';
@Component({
  selector: 'app-corder',
  templateUrl: './corder.component.html',
  styleUrls: ['./corder.component.css']
})
export class CorderComponent {
  id: number = 0;
  orderDetail:any;
  some:any;
  orderDetailSeller : OrderDetailSeller = {
        oId:0,
        shipped:'',
        sellerId:0,
        userAddress:'',
        uFirstName:'',
        uLastName:'',
        userContact:'',
        productName:'',
        productId:'',
};
  constructor(private router: Router, private ser:ShareItemService,
private service:SellerRegistrationService) {}

ngOnInit(){
this.id = this.ser.getId()
let resp= this.service.getOS(this.id);
resp.subscribe((data) => this.orderDetail=data)
}

markShipped(num: number){
  let resp= this.service.updateShipment(num);
resp.subscribe((data) => this.some=data)
this.ngOnInit();
 window.alert("Updated, Please refresh the page");
 this.reloadComponent();
}
reloadComponent() {
  const currentRoute = this.router.url;
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentRoute]);
  });
}
}
