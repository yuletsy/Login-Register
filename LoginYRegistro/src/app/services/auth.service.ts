import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;


  private URL = 'http://localhost:3001/api';
  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user:any) {
    return this.http.post<any>(this.URL + '/register', user);
  }

  loginUser(user:any) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
