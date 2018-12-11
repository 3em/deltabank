import { Component, OnInit, DoCheck, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-questionary-income',
  templateUrl: './questionary-income.component.html',
  styleUrls: ['./questionary-income.component.scss']
})
export class QuestionaryIncomeComponent implements OnInit, DoCheck {

  questionaryFormFields: Object = {
    'salary': {
      id: 'salary',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Заработная плата',
      placeholder: '0 руб.',
      nameInput: 'questionary_salary'
    },
    'docSalary': {
      id: 'docSalary',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Документ подтвер. доход',
      placeholder: '',
      nameInput: 'questionary_docSalary',
      values: [
        {name: 'Справка 2–НДФЛ', value: '2-NDFL'},
        {name: 'Справка по форме банка', value: 'bank'},
        {name: 'Официальная налоговая отчетность (для собственников)', value: 'tax-report'},
        {name: 'Управленческая отчетность', value: 'management-report'},
        {name: 'Иное', value: 'other'}
      ],
      selectedItem: {name: 'Справка 2–НДФЛ', value: '2-NDFL'},
      panelClass: 'b-questionary__dropdown'
    },
    'otherDocSalary': {
      id: 'otherDocSalary',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Комментарий для подтверждения доходов (иное)',
      placeholder: '',
      nameInput: 'questionary_otherDocSalary'
    },
    'salaryDop': {
      id: 'salaryDop',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Зарплата на работе по совместительству',
      placeholder: '0 руб.',
      nameInput: 'questionary_salaryDop'
    },
    'docSalaryDop': {
      id: 'docSalaryDop',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Документ подтвер. доход на работе по совместительству',
      placeholder: '',
      nameInput: 'questionary_docSalaryDop',
      values: [
        {name: 'Справка 2–НДФЛ', value: '2-NDFL'},
        {name: 'Справка по форме банка', value: 'bank'},
        {name: 'Официальная налоговая отчетность (для собственников)', value: 'tax-report'},
        {name: 'Управленческая отчетность', value: 'management-report'},
        {name: 'Иное', value: 'other'}
      ],
      selectedItem: {},
      panelClass: 'b-questionary__dropdown'
    },
    'otherDocSalaryDop': {
      id: 'otherDocSalaryDop',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Комментарий для подтверждения доходов (иное) на работе по совместительству',
      placeholder: '',
      nameInput: 'questionary_otherDocSalaryDop'
    },
    'rentIncome': {
      id: 'rentIncome',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Доход от аренды',
      placeholder: '0 руб.',
      nameInput: 'questionary_rentIncome'
    },
    'pension': {
      id: 'pension',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Пенсия',
      placeholder: '0 руб.',
      nameInput: 'questionary_pension'
    }
  };

  @Input() group: FormGroup;
  @Input() showErrors: boolean;
  @Input() isAnotherJob: boolean;
  @Input() showErrorScrollBlock: string;

  formGroupTitle: string = 'questionaryformIncome';
  showOtherDocSalary: boolean = false;
  showOtherDocSalaryDop: boolean = false;

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
    let thisElem: HTMLElement = document.getElementById('income') as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: questionaryElem.offsetTop + thisElem.offsetTop - 80
    };
    this._scrollToService.scrollTo(config);
  }

  changeCurrentValueDocSalary(event){
    this.questionaryFormFields['docSalary'].selectedItem = event;
    (event.value === 'other') ? this.showOtherDocSalary = true : this.showOtherDocSalary = false;
  }
  changeCurrentValueDocSalaryDop(event){
    this.questionaryFormFields['docSalaryDop'].selectedItem = event;
    (event.value === 'other') ? this.showOtherDocSalaryDop = true : this.showOtherDocSalaryDop = false;
  }

}
