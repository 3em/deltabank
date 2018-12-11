import { Component, OnInit, Input, DoCheck } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-questionary-calculation',
  templateUrl: './questionary-calculation.component.html',
  styleUrls: ['./questionary-calculation.component.scss']
})
export class QuestionaryCalculationComponent implements OnInit, DoCheck {

  questionaryFormFields: Object = {
    'calculateBy':{
      labelText: 'Рассчитать по',
      currentValue: 'realty',
      nameInput: 'questionary_calculateBy',
      inputs: {
        0: {
          label: 'Недвижимости',
          value: 'realty',
          id: 'calculateBy-realty'
        },
        1: {
          label: 'Кредиту',
          value: 'credit',
          id: 'calculateBy-credit'
        },
        2: {
          label: 'Платежам',
          value: 'paymets',
          id: 'calculateBy-paymets'
        },
        3: {
          label: 'Зарплате',
          value: 'salary',
          id: 'calculateBy-salary'
        }
      }
    },
    'realtyPrice': {
      id: 'realtyPrice',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Стоимость недвижимости',
      placeholder: '0 руб.',
      nameInput: 'questionary_realtyPrice'
    },
    'creditSum': {
      id: 'creditSum',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Cумма кредита',
      placeholder: '0 руб.',
      nameInput: 'questionary_creditSum'
    },
    'paymetsSum': {
      id: 'paymetsSum',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Ежемесячный платеж',
      placeholder: '0 руб.',
      nameInput: 'questionary_paymetsSum'
    },
    'salarySum': {
      id: 'salarySum',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Зарплата',
      placeholder: '0 руб.',
      nameInput: 'questionary_salarySum'
    },
    'initialFee': {
      id: 'initialFee',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Первоначальный взнос',
      placeholder: '0 руб.',
      nameInput: 'questionary_initialFee',
      descText: 'минимум 3 900 000 ₽'
    },
    'term': {
      id: 'term',
      showErrorStatus: false,
      errorText: '',
      type: 'number',
      labelText: 'Срок',
      placeholder: '0 лет',
      nameInput: 'questionary_term',
      someVal: ''
    },
  };

  @Input() group: FormGroup;
  @Input() showErrors: boolean;
  @Input() showErrorScrollBlock: string;
  @Input() showCalcBottom: boolean;

  formGroupTitle: string = 'questionaryformMortgage';


  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }
  ngDoCheck(){
    if (this.showErrors){
      this.validateAboutForm();
    }
  }

  /**
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  validateAboutForm() {

    if (!this.group.valid){

      let arrInvalid = [];
      for (let prop in this.group.controls) {
        if (this.group.controls[prop].status == 'INVALID' && this.questionaryFormFields[prop]){
          this.questionaryFormFields[prop].showErrorStatus = true;
          arrInvalid.push(prop);
        }
      }
      if (this.formGroupTitle === this.showErrorScrollBlock){
        this.triggerScrollTo('block-'+arrInvalid[0]);
      }
      return false;
    }

  }

  /**
   * scroll to elem
   * @param id
   */
  public triggerScrollTo(id) {
    let questionaryElem: HTMLElement = document.getElementById('questionary') as HTMLElement;
    let thisElem: HTMLElement = document.getElementById('mortgage') as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: questionaryElem.offsetTop + thisElem.offsetTop - 80
    };
    this._scrollToService.scrollTo(config);
  }

  changeCurrentValueCalculateBy(event) {
    this.questionaryFormFields['calculateBy'].currentValue = event;
  }
  changeCurrentValueTerm(event) {
    this.questionaryFormFields['term'].someVal = event;
  }

}
