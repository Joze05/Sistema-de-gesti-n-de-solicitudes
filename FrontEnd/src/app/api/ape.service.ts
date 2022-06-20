import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ApeService {
  API_URL = 'http://localhost:3000/';

    constructor(private http: HttpClient, private cookies: CookieService) { }

    login(user: any) {
        return this.http.post(this.API_URL + 'login', user);
    }

    insert(boleta: any){
        return this.http.post(this.API_URL + 'request', boleta);
    }

    getAllRequests() {
      return this.http.get(this.API_URL + 'respuestaLegal');
    }
  
    insertRespuesta(descripcion: any){
      return this.http.post(this.API_URL + 'detailedResponse', descripcion)
    }

    setToken(token: string) {
      this.cookies.set("token", token);
    }
    getToken() {
      return this.cookies.get("token");
    }
}
