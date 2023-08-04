import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { SellerRegistrationService } from '../seller-registration.service';
import { Cart } from '../cart';
import {ShareItemService} from '../share-item.service';

@Component({
  selector: 'app-uproducts',
  templateUrl: './uproducts.component.html',
  styleUrls: ['./uproducts.component.css'],
})
export class UproductsComponent implements OnInit {
  product: Product[] = [];
  addToCart: number[] = [];
  firstTime: boolean = true;
  photoDataUrls: { [key: number]: string } = {}; 
  cart : Cart = {
        userId:0,
        longArray:[],
};
  constructor(private http: HttpClient, private service: SellerRegistrationService, private ser:ShareItemService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<Product[]>('http://localhost:5530/getAllProducts').subscribe(
      (data: Product[]) => {
        this.product = data;
        this.fetchImagesForProducts(); 
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  fetchImagesForProducts() {
    for (const product of this.product) {
      this.fetchImage(product.idProduct);
    }
  }

  getImageById(id: number): void {
    this.service.getImageById(id).subscribe(
      (response) => {
        this.createImageFromBlob(response.body, id);
      },
      (error) => {
        console.error('Error fetching image:', error);
      }
    );
  }

  createImageFromBlob(blob: Blob | null, id: number): void {
    if (blob) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.photoDataUrls[id] = reader.result as string;
      };
      reader.readAsDataURL(blob);
    } else {
      console.error('Image data not found in the response.');
    }
  }

  fetchImage(id: number): void {
    this.getImageById(id);
  }


  onProductButtonClick(id: number) {
  
  if (this.firstTime) {

    this.cart.userId = this.ser.getId();
    this.cart.longArray.push(id);
    let resp = this.service.addCart(this.cart);
    resp.subscribe(
      (data) => {
        const message = data;
         window.alert("Product Added");
        console.log(message);
      },
      (error) => {
        console.error('Error while adding cart:', error);
        window.alert("Error occurred while adding cart");
      }
    );
  }
}

}
