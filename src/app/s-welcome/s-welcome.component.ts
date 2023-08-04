import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { SAuthService } from '../s-auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ShareItemService} from '../share-item.service';
import { SplistComponent } from '../splist/splist.component'
import { SellerRegistrationService } from '../seller-registration.service';
import { SpupdateComponent } from '../spupdate/spupdate.component';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { EproductComponent } from '../eproduct/eproduct.component';
import { CorderComponent } from '../corder/corder.component';
@Component({
  selector: 'app-s-welcome',
  templateUrl: './s-welcome.component.html',
  styleUrls: ['./s-welcome.component.css']
})
export class SWelcomeComponent implements OnInit{
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;
  private componentRef?: ComponentRef<any>;
  id: number = 0;
  sellers:any;
constructor(private router: Router, private ser:ShareItemService,
private service:SellerRegistrationService, private componentFactoryResolver: ComponentFactoryResolver) {}
ngOnInit(){
this.id = this.ser.getId()
let resp= this.service.getProductBySeller(this.id);
resp.subscribe((data) => this.sellers=data)
}
registerNow() {
   if (this.componentRef) {
      this.componentRef.destroy(); 
    }
    this.loadDynamicComponent(SplistComponent);
 
  
}
goToHome() {
    this.router.navigate(['']); 
  }
addProduct() {
   if (this.componentRef) {
      this.componentRef.destroy(); 
    }
    this.loadDynamicComponent(AddproductComponent);
 
  
}
editProduct() {
   if (this.componentRef) {
      this.componentRef.destroy(); 
    }
    this.loadDynamicComponent(EproductComponent);
 
  
}

checkOrder() {
   if (this.componentRef) {
      this.componentRef.destroy(); 
    }
    this.loadDynamicComponent(CorderComponent);
 
  
}
updateProfile() {
   if (this.componentRef) {
      this.componentRef.destroy(); 
    }
    this.loadDynamicComponent(SpupdateComponent);
 
  
}
loadDynamicComponent(componentType: any){
const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
}
}
