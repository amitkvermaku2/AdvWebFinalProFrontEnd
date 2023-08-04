import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller';
import { SellerRegistrationService } from '../seller-registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent implements OnInit{

seller : Seller = {
        businessName:'',
        businessAddress:'',
        bContsct:'',
        bEmail:'',
        bSSN:'',
        category:'',
        license:'',
        sellerId:0,
        password:'',
        role:'',
};
message:any;
constructor(private service:SellerRegistrationService, private router: Router) {}
goToHome() {
    this.router.navigate(['']); 
  }
ngOnInit(){}

 public registerNow(){
 let resp=this.service.doRegistration(this.seller);
 resp.subscribe((data)=>this.message=data);
 window.alert("Login through seller login button");
 this.router.navigate(['']);
  }
}
