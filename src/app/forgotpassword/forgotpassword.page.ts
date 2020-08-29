import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(private router: Router, private alrtCtrl: AlertController) { }

  ngOnInit() {
  }

  send() {
    this.router.navigateByUrl("/");
    this.DoneSendmobile()
  }


  async DoneSendmobile() {
    const alert = await this.alrtCtrl.create({
      subHeader: 'عملية ناجحة',
      message: 'تم الإرسال بنجاح.',
      buttons: ['موافق']
    });
    await alert.present();
  }


}
