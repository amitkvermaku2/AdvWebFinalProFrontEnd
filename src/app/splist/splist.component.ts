import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SAuthService } from '../s-auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ShareItemService} from '../share-item.service';
import { SellerRegistrationComponent } from '../seller-registration/seller-registration.component'
import { SellerRegistrationService } from '../seller-registration.service';
@Component({
  selector: 'app-splist',
  templateUrl: './splist.component.html',
  styleUrls: ['./splist.component.css']
})
export class SplistComponent {
  
  id: number = 0;
  sellers:any;
constructor(private router: Router, private ser:ShareItemService,
private service:SellerRegistrationService) {}
ngOnInit(){
this.id = this.ser.getId()
let resp= this.service.getProductBySeller(this.id);
resp.subscribe((data) => this.sellers=data)
}


}
