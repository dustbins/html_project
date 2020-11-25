import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemModalComponent } from '../item-modal/item-modal.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  items = [
    {
      name: "Hammer",
      vendor: "Amazon",
      img_src: "../../assets/images/inventory/hammer.jpg",
      img_lg_src: "../../assets/images/inventory/hammer_lg.jpg",
      url: "https://www.amazon.com/",
      quantity: 5,
      price: "$5.00"
    },
    {
      name: "Drill bits",
      vendor: "Ebay",
      img_src: "../../assets/images/inventory/drillbits.jpg",
      img_lg_src: "../../assets/images/inventory/drillbits_lg.jpg",
      url: "https://www.ebay.com/",
      quantity: 5,
      price: "$5.00"
    },
    {
      name: "Latex Gloves",
      vendor: "Harbor Freight",
      img_src: "../../assets/images/inventory/gloves.jpg",
      img_lg_src: "../../assets/images/inventory/gloves_lg.jpg",
      url: "https://www.harborfreight.com/",
      quantity: 5,
      price: "$5.00"
    },
    {
      name: "Hard hat",
      vendor: "Worly Supply",
      img_src: "../../assets/images/inventory/hard-hat.jpg",
      img_lg_src: "../../assets/images/inventory/hard-hat_lg.jpg",
      url: "https://thinkworly.com/",
      quantity: 5,
      price: "$5.00"
    },
    {
      name: "Face Mask",
      vendor: "Alibaba",
      img_src: "../../assets/images/inventory/mask.jpg",
      img_lg_src: "../../assets/images/inventory/mask_lg.jpg",
      url: "https://www.alibaba.com/",
      quantity: 5,
      price: "$5.00"
    },
    {
      name: "Plywood",
      vendor: "Ace Hardware",
      img_src: "../../assets/images/inventory/plywood.jpg",
      img_lg_src: "../../assets/images/inventory/plywood_lg.jpg",
      url: "https://www.acehardware.com/",
      quantity: 5,
      price: "$5.00"
    },
    {
      name: "Razors",
      vendor: "Amazon",
      img_src: "../../assets/images/inventory/razers.jpg",
      img_lg_src: "../../assets/images/inventory/razers_lg.jpg",
      url: "https://www.amazon.com/",
      quantity: 5,
      price: "$5.00"
    },
    {
      name: "Drywall Screws",
      vendor: "Amazon",
      img_src: "../../assets/images/inventory/screws.jpg",
      img_lg_src: "../../assets/images/inventory/screws_lg.jpg",
      url: "https://www.amazon.com/",
      quantity: 5,
      price: "$5.00"
    },
    {
      name: "Socket Set",
      vendor: "Amazon",
      img_src: "../../assets/images/inventory/socket-set.jpg",
      img_lg_src: "../../assets/images/inventory/socket-set_lg.jpg",
      url: "https://www.amazon.com/",
      quantity: 5,
      price: "$5.00"
    },
    {
      name: "Welding Mask",
      vendor: "Amazon",
      img_src: "../../assets/images/inventory/welding-mask.jpg",
      img_lg_src: "../../assets/images/inventory/welding-mask_lg.jpg",
      url: "https://www.amazon.com/",
      quantity: 5,
      price: "$5.00"
    },
    {
      name: "Wrench",
      vendor: "Amazon",
      img_src: "../../assets/images/inventory/wrench.jpg",
      img_lg_src: "../../assets/images/inventory/wrench_lg.jpg",
      url: "https://www.amazon.com/",
      quantity: 5,
      price: "$5.00"
    },
  ]

  constructor(public modalController: ModalController) {

  }

  ngOnInit() {

  }

  async openModal(item) {
    console.log(item);
    const modal = await this.modalController.create({
      component: ItemModalComponent,
      componentProps: {
        'name': item.name,
        'img_lg_src': item.img_lg_src,
        'quantity': item.quantity,
        'price': item.price,
        'vendor': item.vendor,
        'url': item.url
      }
    });
    console.log(modal.componentProps);
    return await modal.present();
  }

}
