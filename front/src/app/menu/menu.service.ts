import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  async getProductFamilies() {
    const pf = await fetch("http://127.0.0.1:3000/product-families");
    return await pf.json();
  }
}