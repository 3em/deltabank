import { Component, OnInit, OnChanges, DoCheck, Input, Output, LOCALE_ID, EventEmitter } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-questionary-about',
  templateUrl: './questionary-about.component.html',
  styleUrls: ['./questionary-about.component.scss'],
  providers: [
    { provide: LOCALE_ID, useValue: "en-US" },
    DatePipe
  ],
})
export class QuestionaryAboutComponent implements OnInit, DoCheck {

  questionaryFormFields: Object = {
    'surname': {
      id: 'surname',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Фамилия',
      placeholder: 'Иванов',
      nameInput: 'questionary_surname',
      cyrillicValidation: true
    },
    'name': {
      id: 'name',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Имя',
      placeholder: 'Иван',
      nameInput: 'questionary_name',
      cyrillicValidation: true
    },
    'secondName': {
      id: 'secondName',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Отчество',
      placeholder: 'Иванович',
      nameInput: 'questionary_secondName',
      cyrillicValidation: true
    },
    'email': {
      id: 'email',
      showErrorStatus: false,
      errorText: 'Почта в формате: vashapochta@gmail.com',
      type: 'email',
      labelText: 'Почта',
      placeholder: 'vasha_pochta@mail.ru',
      nameInput: 'questionary_email'
    },
    'changeName':{
      labelText: 'Изменялись ли Ваши ФИО',
      currentValue: 'no',
      nameInput: 'questionary_changeName',
      inputs: {
        0: {
          label: 'Да',
          value: 'yes',
          id: 'changeName-yes'
        },
        1: {
          label: 'Нет',
          value: 'no',
          id: 'changeName-no'
        }
      }
    },
    'changeNameYear': {
      id: 'changeNameYear',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Год изменения ФИО',
      placeholder: '',
      nameInput: 'questionary_changeNameYear',
      mask: '9999'
    },
    'prevSurname': {
      id: 'prevSurname',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Предыдущая фамилия',
      placeholder: 'Иванов',
      nameInput: 'questionary_prevSurname',
      cyrillicValidation: true
    },
    'prevName': {
      id: 'prevName',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Предыдущее имя',
      placeholder: 'Иван',
      nameInput: 'questionary_prevName',
      cyrillicValidation: true
    },
    'prevSecondName': {
      id: 'prevSecondName',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Предыдущее отчество',
      placeholder: 'Иванович',
      nameInput: 'questionary_prevSecondName',
      cyrillicValidation: true
    },
    'sex':{
      labelText: 'Пол',
      currentValue: 'male',
      nameInput: 'questionary_sex',
      inputs: {
        0: {
          label: 'Мужской',
          value: 'male',
          id: 'sex-male'
        },
        1: {
          label: 'Женский',
          value: 'female',
          id: 'sex-female'
        }
      }
    },
    'birthday': {
      id: 'birthday',
      date: '',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Дата рождения',
      placeholder: '01.01.1980',
      nameInput: 'questionary_birthday'
    },
    'familystatus': {
      id: 'familystatus',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Семейное положение',
      placeholder: '',
      nameInput: 'questionary_familystatus',
      values: [
          {name: 'Не в браке', value: 'not-married'},
          {name: 'В браке', value: 'married'},
          {name: 'В разводе', value: 'divorced'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'education': {
      id: 'education',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Образование',
      placeholder: '',
      nameInput: 'questionary_education',
      values: [
          {name: 'Высшее', value: 'higher-education'},
          {name: 'Высшее неоконченное', value: 'higher-incomplete-education'},
          {name: 'Среднее', value: 'middle-education'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'personalDoc': {
      id: 'personalDoc',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Документ, уд. личность',
      placeholder: '',
      nameInput: 'questionary_personalDoc',
      values: [
          {name: 'Паспорт гражданина РФ', value: 'passport'},
          {name: 'Паспорт иностранного гражданина', value: 'foreigner-passport'}
      ],
      selectedItem: {name: 'Паспорт гражданина РФ', value: 'passport'},
      panelClass: 'b-questionary__dropdown'
    },
    'citizenship': {
      id: 'citizenship',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Страна гражданства',
      placeholder: ''
    },
    'personalDocNumber': {
      id: 'personalDocNumber',
      showErrorStatus: false,
      errorText: 'Укажите серию и номер паспорта',
      type: 'text',
      labelText: 'Серия и номер паспорта',
      placeholder: '',
      nameInput: 'questionary_personalDocNumber',
      mask: '99 99 999999'
    },
    'personalDocNumberPrev': {
      id: 'personalDocNumberPrev',
      showErrorStatus: false,
      errorText: 'Укажите серию и номер предыдущего паспорта',
      type: 'text',
      labelText: 'Серия и номер предыдущего паспорта',
      placeholder: '',
      nameInput: 'questionary_personalDocNumberPrev',
      mask: '99 99 999999',
      descText: 'Серия и номер предыдущего паспорта указаны на последней странице действующего'
    },
    'docsIssueDate': {
      id: 'docsIssueDate',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Дата выдачи',
      placeholder: '01.01.1980',
      nameInput: 'questionary_docsIssueDate'
    },
    'docsIssueDatePrev': {
      id: 'docsIssueDatePrev',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Дата выдачи предыдущего паспорта',
      placeholder: '01.01.1980',
      nameInput: 'questionary_docsIssueDatePrev'
    },
    'unitCode': {
      id: 'unitCode',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Код подразделения',
      placeholder: '',
      mask: '999-999',
      nameInput: 'questionary_unitCode'
    },
    'unitCodePrev': {
      id: 'unitCodePrev',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Код подразделения предыдущего паспорта',
      placeholder: '',
      mask: '999-999',
      nameInput: 'questionary_unitCodePrev'
    },
    'passportIssuedBy': {
      id: 'passportIssuedBy',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Кем выдан',
      placeholder: '',
      nameInput: 'questionary_passportIssuedBy'
    },
    'burnPlace': {
      id: 'burnPlace',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Место рождения',
      placeholder: '',
      nameInput: 'questionary_burnPlace'
    },
    'registration':{
      labelText: 'Адрес регистрации отсутствует?',
      currentValue: 'no',
      nameInput: 'questionary_registration',
      inputs: {
        0: {
          label: 'Да',
          value: 'yes',
          id: 'registration-yes'
        },
        1: {
          label: 'Нет',
          value: 'no',
          id: 'registration-no'
        }
      }
    },
    'registrationAddress': {
      id: 'registrationAddress',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Адрес регистрации',
      placeholder: '',
      nameInput: 'questionary_registrationAddress'
    },
    'currentAddress': {
      id: 'currentAddress',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Фактический адрес проживания',
      placeholder: '',
      nameInput: 'questionary_currentAddress'
    },
    'registrationEquals':{
      labelText: 'Фактический адрес совпадает с регистрацией?',
      currentValue: 'yes',
      nameInput: 'questionary_registrationEquals',
      inputs: {
        0: {
          label: 'Да',
          value: 'yes',
          id: 'registrationEquals-yes'
        },
        1: {
          label: 'Нет',
          value: 'no',
          id: 'registrationEquals-no'
        }
      }
    },
    'regions': {
      id: 'regions',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Регион недвижимости',
      placeholder: 'Москва'
    },
    'insurance': {
      id: 'insurance',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'СНИЛС',
      placeholder: '',
      mask: '999-999-999-99',
      nameInput: 'questionary_insurance'
    },
    'agree': {
      id: 'agree',
      showErrorStatus: false,
      errorText: '',
      label: 'Согласен с условиями',
      nameInput: 'questionary_agree',
      value: false,
      linkText: 'пользовательского соглашения',
      disabled: true
    }
  };

  countries: string[] = ['Англия', 'Беларусия', 'Венгрия', 'Германия', 'Дания', 'Италия', 'Испания'];
  regions: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];

  personalDocNumberMaskStatus: boolean = true;
  showPrevNames: boolean = false;
  prevPassportStatus: boolean = false;
  countryMask: string = 'passport';
  yearDocsIssue: number = 2010;
  registrationNoStatus: boolean = false;
  currentAddressStatus: boolean = false;
  display: boolean = false;
  showSms: boolean = false;
  statusFalseAgree: boolean = false;

  @Input() group: FormGroup;
  @Input() showErrors: boolean;
  @Input() showNextStep: number;
  @Output() changeNextStatePrev = new EventEmitter<number>(true);
  @Output() familyStatusGlobal = new EventEmitter<string>(true);
  @Output() sexStatusGlobal = new EventEmitter<string>(true);
  @Output() сhangeNameGlobal = new EventEmitter<boolean>(true);
  @Output() showUnitCodeGlobal = new EventEmitter<boolean>(true);
  @Output() changeRegistration = new EventEmitter<boolean>(true);
  @Output() changeCurrentAddress = new EventEmitter<boolean>(true);

  constructor(private fb: FormBuilder, private datepipe: DatePipe, private _scrollToService: ScrollToService) {}

  changeNextState(event){
    this.showNextStep = 1;
    this.onSubmit(this.group.value);
  }

  ngOnInit() {
    this.changeCurrentValueFamilystatus(this.questionaryFormFields['familystatus'].selectedItem);
  }

  ngDoCheck(){
    if (this.showErrors){
      this.validateAboutForm();
    }
  }

  changeCurrentValueSex(event){
    this.questionaryFormFields['sex'].currentValue = event;
    this.sexStatusGlobal.emit(event);
  }
  changeCurrentValueChangeName(event){
    this.questionaryFormFields['changeName'].currentValue = event;
    (event === 'yes') ? this.showPrevNames = true : this.showPrevNames = false;
    this.сhangeNameGlobal.emit(this.showPrevNames);
  }
  changeCurrentValueDate(event){
    this.questionaryFormFields['birthday'].date = event;
  }
  changeCurrentValueFamilystatus(event){
    this.questionaryFormFields['familystatus'].selectedItem = event;
    this.familyStatusGlobal.emit(event.value);
  }
  changeCurrentValueEducation(event){
    this.questionaryFormFields['education'].selectedItem = event;
  }
  changeCurrentValuePersonaldoc(event){
    this.questionaryFormFields['personalDoc'].selectedItem = event;
    this.changeMaskPersonalDocNumber(event.value, this.countryMask);
  }
  changeCurrentValueDocsIssueDate(event){
    this.questionaryFormFields['docsIssueDate'].date = event;
    let selectedYear = this.datepipe.transform(this.questionaryFormFields['docsIssueDate'].date, 'yyyy');
    this.showLastPassportField(selectedYear);
  }
  changeCurrentValueDocsIssueDatePrev(event) {
    this.questionaryFormFields['docsIssueDatePrev'].date = event;
  }
  changeCurrentValueRegistration(event){
    this.questionaryFormFields['registration'].currentValue = event;
    this.registrationFieldsView(event);
  }
  changeCurrentValueRegistrationEquals(event){
    this.questionaryFormFields['registrationEquals'].currentValue = event;
    this.currentAddressView(event);
  }
  changeCurrentValueAgree(event){
    this.questionaryFormFields['agree'].value = event;
    this.validateAboutForm();
  }

  /**
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  onSubmit(value: string) {

    if (this.group.valid){
      this.changeNextStatePrev.emit(this.showNextStep);
    } else {

      let arrInvalid = [];
      for (let prop in this.group.controls) {
        if (this.group.controls[prop].status == 'INVALID' && this.questionaryFormFields[prop]){
          this.questionaryFormFields[prop].showErrorStatus = true;
          arrInvalid.push(prop);
        }
      }
      this.triggerScrollTo('block-'+arrInvalid[0]);
      return false;
    }

  }

  /**
   * validate form
   * @returns {boolean}
   */
  validateAboutForm(){
    if (this.group.valid){
      this.statusFalseAgree = false;
      this.showSms = true;
      this.questionaryFormFields['agree'].disabled = false;
    } else {

      let arrInvalid = [];
      for (let prop in this.group.controls) {
        if (this.group.controls[prop].status == 'INVALID' && this.questionaryFormFields[prop]){
          this.questionaryFormFields[prop].showErrorStatus = true;
          arrInvalid.push(prop);
        }
      }
      this.triggerScrollTo('block-'+arrInvalid[0]);
      return false;
    }
  }

  /**
   * scroll to elem
   * @param id
   */
  public triggerScrollTo(id) {
    let questionaryElem: HTMLElement = document.getElementById('questionary') as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: questionaryElem.offsetTop-80
    };
    this._scrollToService.scrollTo(config);
  }

  /**
   * display data personal popup
   */
  showPersonalDataPopup(e){
    this.display = !e;
  }

  /**
   * show current address field if registration address !=
   * @param value
   */
  currentAddressView(value){
    (value === 'no') ? this.currentAddressStatus = true : this.currentAddressStatus = false;
    this.changeCurrentAddress.emit(this.currentAddressStatus);
  }

  /**
   * show | hide fields of registration address
   * @param value
   */
  registrationFieldsView(value){
    (value === 'yes') ? this.registrationNoStatus = true : this.registrationNoStatus = false;
    this.changeRegistration.emit(!this.registrationNoStatus);
  }

  /**
   * show prev passport
   * @param selectedYear
   */
  showLastPassportField(selectedYear){
    (selectedYear >= this.yearDocsIssue) ? this.prevPassportStatus = true : this.prevPassportStatus = false;
  }

  /**
   * mask on passport number if Russia passport
   * @param value
   * @param mask
   */
  changeMaskPersonalDocNumber(value, mask){
    (value === mask) ? this.personalDocNumberMaskStatus = true : this.personalDocNumberMaskStatus = false;
    this.showUnitCodeGlobal.emit(this.personalDocNumberMaskStatus);
  }

}
