import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { SellerRegistrationService } from '../seller-registration.service';
import { Router } from '@angular/router';
import {ShareItemService} from '../share-item.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
  id: number = 0;
  selectedFile: File | null = null;
product : Product = {
        idProduct:this.id,
        name:'',
        description:'',
        price:'',
        sellerId:this.ser.getId(),
};
message:any;
constructor(private service:SellerRegistrationService, private router: Router, private ser:ShareItemService) {}
ngOnInit(){
}

onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
public registerNow(){
  if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

 let resp=this.service.addProduct(this.product);
 let respp= this.service.uploadPhoto(this.selectedFile, this.product.idProduct)
  resp.subscribe(
      (response) => {
       window.alert("Product Added");
      },
      (error) => {
        window.alert("Product Id Already Present");
      }
    );
    respp.subscribe(
      (response) => {
       window.alert("Photo Uploaded");
      },
      (error) => {
        
      }
    );
 this.reloadComponent()
  }
  reloadComponent() {
  const currentRoute = this.router.url;
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentRoute]);
  });
}
}
