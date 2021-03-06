import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotocart() {
    this.router.navigateByUrl("/cart")
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

}
