import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  quantity: number = 1;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

  gotoprofile() {
    this.router.navigateByUrl("/profile")
  }

  gotosearch() {
    console.log("this function is fired")
  }

  gotomenu() {
    this.router.navigateByUrl("/menu")
  }

  increasequantity() {
    this.quantity++;
  }

  decreasequantity() {
    this.quantity--;
  }

  gotopaymentoptions() {
    this.router.navigateByUrl("/paymentoptions")
  }

  gotoconfirm() {
    this.router.navigateByUrl("/confirmrequest")
  }
  gotonotifications() {
    this.router.navigateByUrl("/notifications")
  }


}
