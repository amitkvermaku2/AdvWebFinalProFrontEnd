import { Component } from '@angular/core';
import { SellerRegistrationService } from '../seller-registration.service';
import { Product } from '../product';
import {ShareItemService} from '../share-item.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eproduct',
  templateUrl: './eproduct.component.html',
  styleUrls: ['./eproduct.component.css']
})
export class EproductComponent {

  productId: number = 0;

  product : Product = {
        idProduct:0,
        name:'',
        description:'',
        price:'',
        sellerId:0,
};


constructor(private router: Router, private service: SellerRegistrationService, private ser:ShareItemService) {}
getProductById() {
    if (this.productId) {
      this.service.getProductByIdcheck(this.productId, this.ser.getId()).subscribe(
        (data) => {
          this.product = data;
         
        },
        (error) => {
          window.alert("Wrong Id/ Not your product");
          console.error('Error fetching product:', error);
        }
      );
    } else {
      console.log('Please enter a valid product ID.');
    }
  }

 updateProfileData() {
    this.service.updateProductData(this.product, this.product.idProduct).subscribe(
      (response) => {
        window.alert("Product Updated");
        console.log('Profile updated successfully:', response);
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
    this.reloadComponent();
  }
  reloadComponent() {
  const currentRoute = this.router.url;
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentRoute]);
  });
}
}
