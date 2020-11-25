import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent implements OnInit {

  @Input() img_lg_src;
  @Input() name;
  @Input() vendor;
  @Input() quantity;
  @Input() price;
  @Input() url;

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
