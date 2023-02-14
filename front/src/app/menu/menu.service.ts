import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  async getProductFamilies() {
    let res = this.http.get<any>('localhost:3000/product-families').subscribe()
      console.log(JSON.stringify(res))
  }
}