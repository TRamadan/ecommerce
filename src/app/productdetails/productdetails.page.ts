import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {

  status: string;
  quantity: number = 0;
  constructor(private router: Router) {
    this.status = "product"
  }

  ngOnInit() {
  }

  gotocart() {
    this.router.navigateByUrl("/cart")
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

  share() {
    console.log("this function is fired")
  }

  addtofav() {
    console.log("this function is fired")
  }

  addtocart() {
    this.router.navigateByUrl("/cart")
  }

  increasequantity() {
    this.quantity++;
    console.log(this.quantity);
  }

  decreasequantity() {
    this.quantity--;
    console.log(this.quantity);
  }



}
