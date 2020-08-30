import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentoptions',
  templateUrl: './paymentoptions.page.html',
  styleUrls: ['./paymentoptions.page.scss'],
})
export class PaymentoptionsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

  gotonotification() {
    this.router.navigateByUrl("/notifications")
  }

  visapayment() {
    this.router.navigateByUrl("/visapayment")
  }

  madapay() {
    console.log("this function is fired")
  }

}
