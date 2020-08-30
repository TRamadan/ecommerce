import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmationmodal',
  templateUrl: './confirmationmodal.page.html',
  styleUrls: ['./confirmationmodal.page.scss'],
})
export class ConfirmationmodalPage implements OnInit {

  constructor(private modalctrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalctrl.dismiss();
  }

}
