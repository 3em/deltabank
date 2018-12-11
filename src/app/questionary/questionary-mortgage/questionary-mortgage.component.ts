import { Component, OnInit, DoCheck, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-questionary-mortgage',
  templateUrl: './questionary-mortgage.component.html',
  styleUrls: ['./questionary-mortgage.component.scss']
})
export class QuestionaryMortgageComponent implements OnInit, DoCheck {

  regions: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];

  questionaryFormFields: Object = {
    'acquisitionRegion': {
      id: 'acquisitionRegion',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Регион недвижимости',
      placeholder: 'Москва'
    },
    'loanObject': {
      id: 'loanObject',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Объект кредитования',
      placeholder: '',
      nameInput: 'questionary_loanObject',
      values: [
          {name: 'Квартира', value: 'flat'},
          {name: 'Дом', value: 'house'},
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'readyStatus':{
      labelText: 'Степень готовности',
      currentValue: 'not-ready',
      nameInput: 'questionary_readyStatus',
      inputs: {
        0: {
          label: 'Готовая',
          value: 'ready',
          id: 'readyStatus_ready'
        },
        1: {
          label: 'Строящееся',
          value: 'not-ready',
          id: 'readyStatus_not-ready'
        },
        2: {
          label: 'Другое',
          value: 'other',
          id: 'readyStatus_other'
        }
      }
    },
    'realtyGuaranty':{
      labelText: 'Под залог недвижимости',
      currentValue: 'no',
      nameInput: 'questionary_realtyGuaranty',
      inputs: {
        0: {
          label: 'Да',
          value: 'yes',
          id: 'realtyGuaranty_yes'
        },
        1: {
          label: 'Нет',
          value: 'no',
          id: 'realtyGuaranty_no'
        }
      }
    },
    'salaryAfterTaxation': {
      id: 'salaryAfterTaxation',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Зарплата после налогообложения',
      placeholder: '0 руб.',
      nameInput: 'questionary_salaryAfterTaxation'
    },
    'ratesProgram': {
      id: 'ratesProgram',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Программа снижения ставки',
      placeholder: '',
      nameInput: 'questionary_ratesProgram',
      values: [
        {name: 'Назначь свою ставку', value: 'option1'},
        {name: 'Назначь свою ставку 2', value: 'option2'},
      ],
      selectedItem: {name: 'Назначь свою ставку', value: 'option1'},
      panelClass: 'b-questionary__dropdown'
    },
    'salaryRosbank': {
      id: 'salaryRosbank',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Понижение ставки',
      label: 'Я зарплатный клиет Росбанка',
      nameInput: 'questionary_salaryRosbank',
      value: false
    },
    'corporateRosbank': {
      id: 'corporateRosbank',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      label: 'Я корпоративный клиет Росбанка',
      nameInput: 'questionary_corporateRosbank',
      value: false
    },
    'lifeInsurance': {
      id: 'lifeInsurance',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      label: 'Страхование жизни',
      nameInput: 'questionary_lifeInsurance',
      value: false
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

  changeCurrentValueLoanObject(event){
    this.questionaryFormFields['loanObject'].selectedItem = event;
  }
  changeCurrentValueRatesProgram(event){
    this.questionaryFormFields['ratesProgram'].selectedItem = event;
  }
  changeCurrentValueReadyStatus(event){
    this.questionaryFormFields['readyStatus'].currentValue = event;
  }
  changeCurrentValueRealtyGuaranty(event){
    this.questionaryFormFields['realtyGuaranty'].currentValue = event;
  }
  changeCurrentValueSalaryRosbank(event){
    this.questionaryFormFields['salaryRosbank'].value = event;
  }
  changeCurrentValueCorporateRosbank(event){
    this.questionaryFormFields['corporateRosbank'].value = event;
  }
  changeCurrentValueLifeInsurance(event){
    this.questionaryFormFields['lifeInsurance'].value = event;
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

}
