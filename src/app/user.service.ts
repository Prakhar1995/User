import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http:HttpClient) { }

  getusers() {
    return this.http.get('https://reqres.in/api/users')
  }

  getusersByid(userId: any) {
    return this.http.get(`https://reqres.in/api/users/${userId}`)
  }
}


