import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  name: string;
  mobile: string;
  address: string;
  password: string;

  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      password: [' ', Validators.required]
    })
    this.SetValues()

  }
  SetValues() {
    this.profileForm.controls.name.setValue('طارق طارق  طارق');
    this.profileForm.controls.mobile.setValue('01144877526');
    this.profileForm.controls.address.setValue('test test test');
    this.profileForm.controls.password.setValue('10201020')
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

  gotocart() {
    this.router.navigateByUrl("/cart");
  }

  gotosearch() {
    console.log("this function is fired")
  }

  gotomenu() {
    this.router.navigateByUrl("/menu")
  }

  gotonotifications() {
    this.router.navigateByUrl("/notifications")
  }
}
