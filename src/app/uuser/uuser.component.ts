
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { SAuthService } from '../s-auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ShareItemService} from '../share-item.service';
import { SplistComponent } from '../splist/splist.component'
import { SellerRegistrationService } from '../seller-registration.service';
@Component({
  selector: 'app-uuser',
  templateUrl: './uuser.component.html',
  styleUrls: ['./uuser.component.css']
})
export class UuserComponent {
  id: number = 0;
  profileData: any = {};
  constructor(private router: Router, private ser:ShareItemService,
  private service:SellerRegistrationService){}
ngOnInit(){
this.id = this.ser.getId()
this.fetchProfileData();
}

fetchProfileData() {
    this.service.getUserData(this.id).subscribe(
      (data) => {
        this.profileData = data;
      },
      (error) => {
        console.error('Error fetching profile data:', error);
      }
    );
  }

  updateProfileData() {
    this.service.updateUserData(this.profileData, this.id).subscribe(
      (response) => {
        window.alert("Profile updated successfully");
        console.log('Profile updated successfully:', response);
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
  }


}
