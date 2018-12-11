import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valuation-complete',
  templateUrl: './valuation-complete.component.html',
  styleUrls: ['./valuation-complete.component.scss']
})
export class ValuationCompleteComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  activeIndexNav: number = 6;
  finishStep: boolean = false;
  statusWait: boolean = false;
  creditSum: number = 22000000;
  bigNavStatus: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
