import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionary-calculation-result',
  templateUrl: './questionary-calculation-result.component.html',
  styleUrls: ['./questionary-calculation-result.component.scss']
})
export class QuestionaryCalculationResultComponent implements OnInit {

  monthPaymentError: boolean = true;
  openAlertRef: string;
  creditSum: number = 22000000;
  monthPayment: number = 140000;
  rate: string = '10';
  newRate: string = '9.7';

  constructor() { }

  ngOnInit() {
  }

  /**
   * format price
   * @param val
   * @returns {string}
   */
  formating(val) {
    return String(val).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
  };

  /**
   * alert open | close
   * @param event
   * @param ref
   */
  alertClick(event, ref){
    ref.toggle(event);
  }

}
