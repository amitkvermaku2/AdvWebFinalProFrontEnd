import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Seller } from './seller';
import { Cart } from './cart';
import { User } from './user';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductImage } from './productimage';
import { PlaceOrder } from './placeorder';
@Injectable({
  providedIn: 'root'
})
export class SellerRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(seller: Seller){
    return this.http.post("http://localhost:5530/saveSeller",seller,{responseType:'text' as 'json'});
  }

  public addProduct(product: Product): Observable<any> {
    return this.http.post<any>("http://localhost:5530/saveProduct",product,{responseType:'text' as 'json'});
  }

  public getProductBySeller(id: number){
    return this.http.get("http://localhost:5530/getAllProductsById/"+id);
  }

  public getProfileData(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:5530/getSellerById/"+id);
  }

  public updateSellerProfileeData(updatedData: any, id:number): Observable<any> {
    return this.http.put<any>("http://localhost:5530/updateSeller/"+id, updatedData);
  }

  public  uploadPhoto(photo: File, id: number) {
    const formData = new FormData();
    formData.append('photoFile', photo);
    formData.append('id', ""+id)

   
    return this.http.post<any>('http://localhost:5530/uploadImage', formData);
  }
   public getProductById(id: number): Observable<any>{
   return this.http.get<any>("http://localhost:5530/getProductById/"+id);
  }

  public getProductByIdcheck(id: number, sid:number): Observable<any>{
   return this.http.get<any>("http://localhost:5530/getProductByIdCHeck/"+id+"/"+sid);
  }

  public updateProductData(updatedData: any, id:number): Observable<any> {
    return this.http.put<any>("http://localhost:5530/updateProductById/"+id, updatedData);
  }

  public doUserRegistration(user: User){
    return this.http.post("http://localhost:5530/saveUser",user,{responseType:'text' as 'json'});
  }

  private baseUrl = 'http://localhost:5530';

  getImageById(id: number): Observable<HttpResponse<Blob>> {
    const url = `${this.baseUrl}/photoById/${id}`;
    return this.http.get(url, { observe: 'response', responseType: 'blob' });
  }

  public addCart(cart: Cart){
    return this.http.post("http://localhost:5530/saveCart",cart,{responseType:'text' as 'json'});
  }

  public getProductOfCart(id: number){
    return this.http.get("http://localhost:5530/getCartOrderById/"+id);
  }

  public orderPlaced(placeOrder: PlaceOrder, id:number){
    return this.http.delete("http://localhost:5530/deleteCart/"+id);
  }

  public updateOrderPlaced(placeOrder: PlaceOrder){
    return this.http.post("http://localhost:5530/savePlaceOrder",placeOrder,{responseType:'text' as 'json'});
  }

  public getOrderDetailById(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:5530/getPlaceUserOrderById/"+id);
  }

  public getOrderDetailByOrderAndUserId(id: number, oid: number): Observable<any> {
    return this.http.get<any>("http://localhost:5530/getPlaceOrderUserById/"+id+"/"+oid);
  }

  public getTotal(id: number){
    return this.http.get("http://localhost:5530/getTotal/"+id);
  }

  public getTotalCart(id: number){
    return this.http.get("http://localhost:5530/getCartTotal/"+id);
  }

   public getUserData(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:5530/getUserById/"+id);
  }

  public updateUserData(updatedData: any, id:number): Observable<any> {
    return this.http.put<any>("http://localhost:5530/updateUsers/"+id, updatedData);
  }

  public userIdOrder(id: number){
    return this.http.post("http://localhost:5530/orderOfCart/"+id,{responseType:'text' as 'json'});
  }

  public getOS(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:5530/getOrderDetail/"+id);
  }

  public updateShipment(id:number): Observable<any> {
    return this.http.get<any>("http://localhost:5530/updateShippemt/"+id);
  }
}
