import { Component } from '@angular/core';
import { SellerRegistrationService } from '../seller-registration.service';
import {ShareItemService} from '../share-item.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {
  id: number = 0;
  orders:any;
  items:any;
  tprice: any;
constructor(private router: Router, private ser:ShareItemService,
private service:SellerRegistrationService) {}
ngOnInit(){
this.id = this.ser.getId()
let resp= this.service.getOrderDetailById(this.id);
resp.subscribe((data) => this.orders=data)

}

showDiv: boolean = false;

  toggleDiv(oid: number) {
    this.id = this.ser.getId()
  let respa= this.service.getOrderDetailByOrderAndUserId(this.id,oid);
respa.subscribe((data) => this.items=data)
let respaq= this.service.getTotal(oid);
respaq.subscribe((data) => this.tprice=data)
    this.showDiv = !this.showDiv;
    this.zero();
  }

  zero(){
     this.tprice=0;
  }
 someMethod(oid: number){
  let respa= this.service.getTotal(oid);
respa.subscribe((data) => this.tprice=data)
}
}
