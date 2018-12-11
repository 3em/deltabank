import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.scss']
})
export class ValuationComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  activeIndexNav: number = 6;
  finishStep: boolean = false;
  showForm: boolean = true;

  constructor() { }

  ngOnInit() {}

}
