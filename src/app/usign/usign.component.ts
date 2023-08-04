import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SellerRegistrationService } from '../seller-registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usign',
  templateUrl: './usign.component.html',
  styleUrls: ['./usign.component.css']
})
export class UsignComponent implements OnInit{
  user : User = {
        userFirstName:'',
        userLastName:'',
        userContact:'',
        userEmail:'',
        userAddress:'',
        userPassword:'',
        role:'',
        userId:0,
};
message:any;
constructor(private service:SellerRegistrationService, private router: Router) {}
goToHome() {
    this.router.navigate(['']); 
  }
ngOnInit(){}
public registerNow(){
 let resp=this.service.doUserRegistration(this.user);
 resp.subscribe((data)=>this.message=data);
 window.alert("Login through user login button");
 this.router.navigate(['']);
  }
}
