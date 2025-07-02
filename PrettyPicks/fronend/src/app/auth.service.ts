import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor() {
    this.checkLoginStatus();
  }

  login() {
    this.loggedIn.next(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('isLoggedIn');
  }

  checkLoginStatus() {
    const status = localStorage.getItem('isLoggedIn');
    this.loggedIn.next(status === 'true');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
