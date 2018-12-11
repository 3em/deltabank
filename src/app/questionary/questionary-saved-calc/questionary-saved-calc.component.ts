import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-questionary-saved-calc',
  templateUrl: './questionary-saved-calc.component.html',
  styleUrls: ['./questionary-saved-calc.component.scss']
})
export class QuestionarySavedCalcComponent implements OnInit {

  savedItems: Object = [
    {
      id: 1,
      type: 'Недвижимости',
      credit: 23140000,
      firstPay: 3440000,
      monthPay: 130200,
      period: 10,
      percent: '9,7',
      error: true
    },
    {
      id: 2,
      type: 'Платежам',
      credit: 20900000,
      firstPay: 4800000,
      monthPay: 94800,
      period: 15,
      percent: '9,7',
      error: false
    },
    {
      id: 3,
      type: 'Зарплате',
      credit: 15140000,
      firstPay: 9440000,
      monthPay: 67600,
      period: 15,
      percent: '9,7',
      error: false
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

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

  getYearsWord(num){
    return this.declension(num, 'год', 'года', 'лет');
  }

  /**
   * declension words
   */
  declension(number, one, two, five) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
      return five;
    }
    number %= 10;
    if (number == 1) {
      return one;
    }
    if (number >= 2 && number <= 4) {
      return two;
    }
    return five;
  };

  /**
   * alert show
   * @param event
   * @param ref
   */
  alertShow(event, ref){
    ref.show(event);
  }

  /**
   * alert hide
   * @param event
   * @param ref
   */
  alertHide(event, ref){
    ref.hide(event);
  }

  clickItem(e, errorStatus){
    e.preventDefault();

    if (!errorStatus){
      this.router.navigate(['/questionary-complete'])
    }
  }
}
