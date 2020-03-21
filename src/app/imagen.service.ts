import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImagenService {
  // define our class properties. apiUrl is what we need
  // usually you could get this from an environment file
  apiUrl = 'https://randomuser.me/api/';

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  // return what comes back from this http call
  getProducts() {
    return this.http.get(`${this.apiUrl}?results=25`);
  }
}
