import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareItemService {
  uid:number = 0;
  constructor() { }
  setId(data: number){
    this.uid = data;
  }
  getId(){
    return this.uid;
  }
}
