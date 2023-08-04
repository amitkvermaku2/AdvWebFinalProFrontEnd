import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { SAuthService } from '../s-auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ShareItemService} from '../share-item.service';
import { SplistComponent } from '../splist/splist.component'
import { SellerRegistrationService } from '../seller-registration.service';
import { SpupdateComponent } from '../spupdate/spupdate.component';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { UproductsComponent } from '../uproducts/uproducts.component';
import { CartdetailsComponent } from '../cartdetails/cartdetails.component';
import { OrderdetailsComponent } from '../orderdetails/orderdetails.component';
import { UuserComponent } from '../uuser/uuser.component';
@Component({
  selector: 'app-u-logged',
  templateUrl: './u-logged.component.html',
  styleUrls: ['./u-logged.component.css']
})
export class ULoggedComponent implements OnInit{
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;
  private componentRef?: ComponentRef<any>;
  id: number = 0;
constructor(private router: Router, private ser:ShareItemService,
private service:SellerRegistrationService, private componentFactoryResolver: ComponentFactoryResolver) {}
ngOnInit(){
this.id = this.ser.getId()
}
Products() {
   if (this.componentRef) {
      this.componentRef.destroy(); 
    }
    this.loadDynamicComponent(UproductsComponent);
 
  
}
goToHome() {
    this.router.navigate(['']); 
  }
Cart() {
   if (this.componentRef) {
      this.componentRef.destroy(); 
    }
    this.loadDynamicComponent(CartdetailsComponent);
 
  
}
Order() {
   if (this.componentRef) {
      this.componentRef.destroy(); 
    }
    this.loadDynamicComponent(OrderdetailsComponent);
 
  
}
Update(){
  if (this.componentRef) {
      this.componentRef.destroy(); 
    }
    this.loadDynamicComponent(UuserComponent);
}

loadDynamicComponent(componentType: any){
const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
}
}
