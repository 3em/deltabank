import { Component, OnInit, OnChanges, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-questionary-spouse',
  templateUrl: './questionary-spouse.component.html',
  styleUrls: ['./questionary-spouse.component.scss']
})
export class QuestionarySpouseComponent implements OnInit, DoCheck {

  @Input() group: FormGroup;
  @Input() showErrors: boolean;
  @Input() showErrorScrollBlock: string;
  @Input() sexStatus: boolean;

  questionaryFormFields: Object = {
    'spousePhone': {
      id: 'spousePhone',
      showErrorStatus: false,
      type: 'tel',
      errorText: 'Обязательно для заполнения',
      labelText: 'Мобильный телефон',
      placeholder: '+7 (000) 000-00-00',
      nameInput: 'registration_spousePhone',
      alertHtmlShow: false,
      mask: '+7 (999) 999-99-99'
    },
    'spouseEmail': {
      id: 'spouseEmail',
      showErrorStatus: false,
      errorText: 'Почта в формате: pochta@gmail.com',
      type: 'email',
      labelText: 'Электронная почта',
      placeholder: 'pochta@mail.ru',
      nameInput: 'registration_spouseEmail'
    },
    'statusSpouseIncome':{
      labelText: (this.sexStatus) ? 'Учитывать доходы супруги?' : 'Учитывать доходы супруга?',
      currentValue: 'no',
      nameInput: 'questionary_statusSpouseIncome',
      inputs: {
        0: {
          label: 'Да',
          value: 'yes',
          id: 'statusSpouseIncome-yes'
        },
        1: {
          label: 'Нет',
          value: 'no',
          id: 'statusSpouseIncome-no'
        }
      }
    },
    'spouseLoanRespons':{
      labelText: (this.sexStatus) ? 'Супруг ответственный за данный кредит?' : 'Супруга ответственна за данный кредит?',
      currentValue: 'no',
      nameInput: 'questionary_spouseLoanRespons',
      inputs: {
        0: {
          label: 'Да',
          value: 'yes',
          id: 'spouseLoanRespons-yes'
        },
        1: {
          label: 'Нет',
          value: 'no',
          id: 'spouseLoanRespons-no'
        }
      }
    },
    'spouseIncome': {
      id: 'spouseIncome',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: (this.sexStatus) ? 'Примерный доход супруги' : 'Примерный доход супруга',
      placeholder: '0 руб.',
      nameInput: 'questionary_spouseIncome'
    },
    'propertyOwner': {
      id: 'propertyOwner',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'На кого оформляется недвижимость?',
      placeholder: '',
      nameInput: 'questionary_propertyOwner',
      values: [
        {name: 'На меня и на супруга/супругу', value: 'on-both'},
        {name: 'На меня', value: 'on-me'},
        {name: 'На супруга/супругу', value: 'on-spouse'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
  };

  titleWord: string = (this.sexStatus) ? 'Супруге' : 'Супругу';
  formGroupTitle: string = 'questionaryformSpouse';
  statusSpouseIncome: boolean = false;
  statusSpouseLoanRespons: boolean = false;

  @Output() changeSpouseIncome = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private _scrollToService: ScrollToService) { }

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
    let thisElem: HTMLElement = document.getElementById('spouse') as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: questionaryElem.offsetTop + thisElem.offsetTop - 80
    };
    this._scrollToService.scrollTo(config);
  }

  changeCurrentValueStatusSpouseIncome(event){
    this.questionaryFormFields['statusSpouseIncome'].currentValue = event;

    (this.questionaryFormFields['statusSpouseIncome'].currentValue === 'yes') ? this.statusSpouseIncome = true : this.statusSpouseIncome = false;
    this.changeSpouseIncome.emit(this.statusSpouseIncome);
  }

  changeCurrentValueSpouseLoanRespons(event){
    this.questionaryFormFields['spouseLoanRespons'].currentValue = event;
  }

  changeCurrentValuePropertyOwner(event){
    this.questionaryFormFields['propertyOwner'].selectedItem = event;
    (event.value === 'on-me') ? this.statusSpouseLoanRespons = true : this.statusSpouseLoanRespons = false;
  }

}
