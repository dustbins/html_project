import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { JobModalComponent } from '../job-modal/job-modal.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

  public jobs = [
    {
      customer: "John Doe",
      date: "27 Oct 2020",
      finished: "27 Oct 2020",
      technician: "Mike Pence",
      billed: "$450.00",
      itemsUsed: [
      ]
    },
    {
      customer: "James Mac",
      date: "15 Dec 2020",
      finished: "16 Dec 2020",
      technician: "Skizzy Mars",
      billed: "$450.00",
      itemsUsed: [
      ]
    },
    {
      customer: "Harold Dingle",
      date: "11 Feb 2020",
      finished: "11 Feb 2020",
      technician: "Metallica",
      billed: "$450.00",
      itemsUsed: [
      ]
    },
    {
      customer: "Rex Tillerson",
      date: "05 Aug 2020",
      finished: "05 Aug 2020",
      technician: "Bon Jovi",
      billed: "$450.00",
      itemsUsed: [
      ]
    }, {
      customer: "Bryan Cranston",
      date: "27 Oct 2020",
      finished: "27 Oct 2020",
      technician: "Luke Skywalker",
      billed: "$450.00",
      itemsUsed: [
      ]
    },
    {
      customer: "Michael New",
      date: "27 Oct 2020",
      finished: "27 Oct 2020",
      technician: "Patrick Star",
      billed: "$450.00",
      itemsUsed: [
      ]
    },
    {
      customer: "Jennifer White",
      date: "27 Oct 2020",
      finished: "27 Oct 2020",
      technician: "Spongebob Squarepants",
      billed: "$450.00",
      itemsUsed: [
      ]
    },
    {
      customer: "Vladmir Putin",
      date: "27 Oct 2020",
      finished: "27 Oct 2020",
      technician: "Mike Pence",
      billed: "$450.00",
      itemsUsed: [
      ]
    },
    {
      customer: "Sarah Strong",
      date: "27 Oct 2020",
      finished: "27 Oct 2020",
      technician: "Mike Pence",
      billed: "$450.00",
      itemsUsed: [
      ]
    }
  ]

  public modal;

  constructor(
    public modalController: ModalController,
    public navController: NavController) { }

  ngOnInit() {

  }

  async openModal(job) {
    this.modal = await this.modalController.create({
      component: JobModalComponent,
      componentProps: {
        'customer': job.customer,
        'date': job.date,
        'finished': job.finished,
        'technician': job.technician,
        'billed': job.billed
      }
    });

    this.modal.onDidDismiss().then(({ data }) => {
      if (data !== null) {
        console.log(data);
        if (data.visit == "employees") {
          this.navController.navigateRoot('/employee');
        } else if (data.visit == "sales") {
          this.navController.navigateRoot('/sales');
        } else {
          // do nothing, stay here
        }
      }
    });
    return await this.modal.present();
  }


}
