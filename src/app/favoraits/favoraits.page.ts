import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoraits',
  templateUrl: './favoraits.page.html',
  styleUrls: ['./favoraits.page.scss'],
})
export class FavoraitsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotonotifications() {
    this.router.navigateByUrl("/notifications");
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

  gotocart() {
    this.router.navigateByUrl("/cart")
  }

}
