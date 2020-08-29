import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoprofile() {
    this.router.navigateByUrl("/profile")
  }

  gotomenu() {
    this.router.navigateByUrl("/menu")
  }

  gotosearch() {
    this.router.navigateByUrl("/serch")
  }

  gotocart() {
    this.router.navigateByUrl("/cart")
  }

  gotocategories() {
    this.router.navigateByUrl("/categories")
  }

  gotonotification() {
    this.router.navigateByUrl("/notifications")
  }

  showdetails() {
    this.router.navigateByUrl("/productdetails")
  }

}
