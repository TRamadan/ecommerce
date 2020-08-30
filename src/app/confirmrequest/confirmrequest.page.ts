import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmrequest',
  templateUrl: './confirmrequest.page.html',
  styleUrls: ['./confirmrequest.page.scss'],
})
export class ConfirmrequestPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

  gotonotification() {
    this.router.navigateByUrl("/notfications")
  }

  gotopaymentoptions() {
    this.router.navigateByUrl("/paymentoptions")
  }

}
