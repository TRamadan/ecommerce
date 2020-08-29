import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  name: string;
  mobile: string;
  address: string;
  password: string;

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.name = "طارق طارق";
    this.mobile = "01144877526";
    this.address = " test test test";
    this.password = "10201020"
  }
  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      password: [' ', Validators.required]
    })
    this.SetValues()

  }


  //here is a function needed to set the profile values
  SetValues() {
    this.profileForm.controls.name.setValue('طارق طارق  طارق');
    this.profileForm.controls.mobile.setValue('01144877526');
    this.profileForm.controls.address.setValue('test test test');
    this.profileForm.controls.password.setValue('10201020')
  }

}
