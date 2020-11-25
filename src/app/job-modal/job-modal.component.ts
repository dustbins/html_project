import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-job-modal',
  templateUrl: './job-modal.component.html',
  styleUrls: ['./job-modal.component.scss'],
})
export class JobModalComponent implements OnInit {

  @Input() customer;
  @Input() date;
  @Input() finished;
  @Input() technician;
  @Input() billed;

  constructor(public modalController: ModalController) {

  }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
      'visit': 'none'
    });
  }

  public goToSalesPage() {
    this.modalController.dismiss({
      'dismissed': true,
      'visit': 'sales'
    })
  }

  public goToEmployeesPage() {
    this.modalController.dismiss({
      'dismissed': true,
      'visit': 'employees'
    })
  }

  public goToCustomersPage() {
    this.modalController.dismiss({
      'dismissed': true,
      'visit': 'customers'
    })
  }

}
