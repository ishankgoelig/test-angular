import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  api: string = 'assets/test.json';

  get() {
    console.log(this.api);
    return this.http.get(this.api);
  }
}
