import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-complete',
  templateUrl: './deal-complete.component.html',
  styleUrls: ['./deal-complete.component.scss']
})
export class DealCompleteComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  activeIndexNav: number = 7;
  finishStep: boolean = true;

  time: string = '9 апреля в 13:00';
  address: string = 'ул. Моховая, д. 7';
  addressUrl: string = '#';

  constructor() { }

  ngOnInit() {
  }

}
