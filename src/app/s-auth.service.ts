import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Saut } from './saut';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SAuthService {
  constructor(private http:HttpClient) { }
  
  doRegistration(saut: Saut): Observable<HttpResponse<any>> {
  return this.http.post("http://localhost:5530/sauth/login", saut, { observe: 'response', responseType: 'text' as 'json' });

  }
  userLoginAuth(saut: Saut): Observable<HttpResponse<any>> {
  return this.http.post("http://localhost:5530/sauth/loginUser", saut, { observe: 'response', responseType: 'text' as 'json' });

  }

 
}
