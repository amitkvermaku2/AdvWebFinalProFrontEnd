import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Saut } from '../saut';
import { SAuthService } from '../s-auth.service';
import {ShareItemService} from '../share-item.service';
@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css']
})
export class SloginComponent {
  saut : Saut = {
        uname:0,
        upassword:'',
};
constructor(private service:SAuthService, private router: Router, private ser:ShareItemService) {}
ngOnInit(){
  
}
goToHome() {
    this.router.navigate(['']); 
  }
public registerNow(){
  let resp=this.service.doRegistration(this.saut);
  resp.subscribe(
      (response) => {
        console.log('Response from the URL:', response);
        console.log('HTTP Status Code:', response);
        this.ser.setId(this.saut.uname);
 this.router.navigate(['/slogged']);
      },
      (error) => {
        console.error('Error occurred:', error);
        this.router.navigate(['']);
        window.alert("Wrong Id or Password");
      }
    );
 
}
}
