import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {

  constructor(public alertCtrl: AlertController, public router: Router) { }

  ngOnInit() {
  }

  gotologin() {
    this.router.navigateByUrl("/login")
  }

  OnRegister() {
    this.DoneRegisteration();
    this.router.navigateByUrl("/");
  }

  async DoneRegisteration() {
    const alert = await this.alertCtrl.create({
      subHeader: 'عملية ناجحة',
      message: 'تم تسجيل حساب جديد بنجاح.',
      buttons: ['موافق']
    });
    await alert.present();
  }





}
