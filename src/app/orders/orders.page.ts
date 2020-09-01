import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

  gotocart() {
    this.router.navigateByUrl("/cart")
  }

  gotonotifications() {
    this.router.navigateByUrl("/notifications")
  }

  remove() {
    console.log("this function is fired")
  }

}
