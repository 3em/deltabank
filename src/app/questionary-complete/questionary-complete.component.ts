import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionary-complete',
  templateUrl: './questionary-complete.component.html',
  styleUrls: ['./questionary-complete.component.scss']
})
export class QuestionaryCompleteComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  successQuestionary: boolean = true;
  statusWait: boolean = false;
  creditSum: number = 22000000;
  activeIndexNav: number = 0;
  finishStep: boolean = true;

  maxDays: number = 28;
  leftDays: number = 16;
  wordDays: string = this.declension(this.leftDays, 'день', 'дня', 'дней');
  widthPanel: number = Math.round(this.leftDays / (this.maxDays / 100));

  constructor() { }

  ngOnInit() {
  }

  /**
   * change word ends
   * @param number
   * @param one
   * @param two
   * @param five
   * @returns {any}
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

}
