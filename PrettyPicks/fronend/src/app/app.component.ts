import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth.service'; // make sure this path is correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PrettyPicks';
  searchtext: string = '';
  showHeader = true;
  isLoggedIn = false;
  showDropdown = false;

  constructor(private router: Router, private authService: AuthService) {
    // Show/hide header based on route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = event.urlAfterRedirects;
        this.showHeader = !(route.includes('sign-up') || route.includes('login'));
      }
    });
  }

  ngOnInit(): void {
    // Sync login status from AuthService
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });

    this.authService.checkLoginStatus(); // sync from localStorage
  }

  logout() {
    this.authService.logout();
    this.showDropdown = false;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
