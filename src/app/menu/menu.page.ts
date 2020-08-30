import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  gotofavoraits() {
    this.router.navigateByUrl("/favoraits");
  }

  gotocontactus() {
    this.router.navigateByUrl("/contactus")
  }

  gotoprivacy() {
    this.router.navigateByUrl("/privacy")
  }

  gotoaboutus() {
    this.router.navigateByUrl("/aboutus")
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

  gotoprofile() {
    this.router.navigateByUrl("/profile")
  }

  goto_orders() {
    this.router.navigateByUrl("/orders")
  }

}
