import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visapayment',
  templateUrl: './visapayment.page.html',
  styleUrls: ['./visapayment.page.scss'],
})
export class VisapaymentPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

  gotonotification() {
    this.router.navigateByUrl("/notifications")
  }

  paynow() {
    console.log("this function is fired")
  }

}
