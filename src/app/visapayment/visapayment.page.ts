import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmationmodalPage } from "../confirmationmodal/confirmationmodal.page";
@Component({
  selector: 'app-visapayment',
  templateUrl: './visapayment.page.html',
  styleUrls: ['./visapayment.page.scss'],
})
export class VisapaymentPage implements OnInit {

  constructor(private router: Router, private modalcontroller: ModalController) { }

  ngOnInit() {
  }

  gotohome() {
    this.router.navigateByUrl("/home")
  }

  gotonotification() {
    this.router.navigateByUrl("/notifications")
  }

  paynow() {
    console.log("this function is fired");
    this.openmodal();
  }

  //here is the function needed to open the modal 
  async openmodal() {
    this.modalcontroller.create({ component: ConfirmationmodalPage }).then(modalelement => {
      modalelement.present();
    })
  }

}
