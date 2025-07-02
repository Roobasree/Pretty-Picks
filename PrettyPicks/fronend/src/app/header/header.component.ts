import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  isLoggedIn = false;
  dropdown = false;
  itemCart :any

  constructor(private router:Router, private cartService:CartService){}

  ngOnInit(){
    this.checkLogin();

    // Watch for route changes to recheck login status
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkLogin();
      }
    });
  }

  checkLogin(){
    this.isLoggedIn = localStorage.getItem('isLoggedIn')==='true'

  }

  toggleDropdown(){
    this.dropdown = !this.dropdown
  }

  logout(){
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn=false
    this.dropdown=false
    this.router.navigate(['/login'])
  }

  cartCount(){
    this.cartService.getCartItems().subscribe((data)=>{
      this.itemCart = data
    })
    return this.itemCart.length
  }
}
