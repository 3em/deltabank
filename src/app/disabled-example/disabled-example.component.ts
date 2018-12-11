import { Component, OnInit, Inject } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { WINDOW } from "../window.service";
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-disabled-example',
  templateUrl: './disabled-example.component.html',
  styleUrls: ['./disabled-example.component.scss']
})
export class DisabledExampleComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  activeIndexNav: number = 7;
  finishStep: boolean = false;

  meetingTime: string;
  datapickerTextDate: string = '';
  timeTextDate: string = '';
  showSumTangibleCapital: boolean = false;
  exampleForm: FormGroup;

  days: Object = {
    Mon: 'Понедельник',
    Tue: 'Вторник',
    Wed: 'Среда',
    Thu: 'Четверг',
    Fri: 'Пятница',
    Sat: 'Суббота',
    Sun: 'Воскресенье'
  };

  month: Object = {
    "Jan": 'января',
    "Feb": 'февраля',
    "Mar": 'марта',
    "Apr": 'апреля',
    "May": 'мая',
    "Jun": 'июня',
    "Jul": 'июля',
    "Aug": 'августа',
    "Sep": 'сентября',
    "Oct": 'октября',
    "Nov": 'ноября',
    "Dec": 'декабря'
  };


  exampleFormFields: Object = {
    'creditSum': {
      id: 'creditSum',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Сумма кредита',
      placeholder: '0 руб.',
      nameInput: 'deal_creditSum',
      someVal: 20000,
      disabledStatus: true
    },
    'prepaid': {
      id: 'prepaid',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Аванс',
      placeholder: '0 руб.',
      nameInput: 'deal_prepaid',
      someVal: '12312312',
      disabledStatus: true
    },
    'feature': {
      id: 'feature',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Особенность сделки',
      placeholder: '',
      nameInput: 'deal_feature',
      values: [
        {name: 'Нет', value: 'no'},
        {name: 'Сделка с субсидией', value: 'subsidy'},
        {name: 'Сделка с мат. капиталом', value: 'tangibleCapital'}
      ],
      selectedItem: {name: 'Нет', value: 'no'},
      panelClass: 'b-questionary__dropdown',
      disabledStatus: true
    },
    'motherCapital': {
      id: 'motherCapital',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Сумма материнского капитала',
      placeholder: '0 руб.',
      nameInput: 'deal_motherCapital',
      someVal: '1231231',
      disabledStatus: true
    },
    'paymentForm': {
      id: 'paymentForm',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Форма расчета',
      placeholder: '',
      nameInput: 'deal_paymentForm',
      disabledStatus: true,
      values: [
        {name: 'Наличный (ячейки)', value: 'cash'},
        {name: 'Безналичный', value: 'no-cash'},
        {name: 'Накопительный счет', value: 'savings-account'},
        {name: 'Накопительный счет+личные ячейки', value: 'savings-account&personal-account'},
        {name: 'Аккредитив', value: 'bill-of-credit'},
        {name: 'Аккредитив + ячейки', value: 'bill-of-credit&account'},
      ],
      selectedItem: {name: 'Наличный (ячейки)', value: 'cash'},
      panelClass: 'b-questionary__dropdown'
    },
    'lawType': {
      id: 'lawType',
      showErrorStatus: false,
      disabledStatus: true,
      errorText: 'Обязательно для заполнения',
      labelText: 'Вид права',
      placeholder: '',
      nameInput: 'deal_lawType',
      values: [
        {name: 'Общая совместная', value: 'type1'},
        {name: 'Индивидуальная', value: 'type2'},
        {name: 'Долевая', value: 'type3'}
      ],
      selectedItem: {name: 'Общая совместная', value: 'type1'},
      panelClass: 'b-questionary__dropdown'
    },
    'propertyCost': {
      id: 'propertyCost',
      showErrorStatus: false,
      disabledStatus: true,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Стоимость недвижимости',
      placeholder: '0 руб.',
      nameInput: 'deal_propertyCost',
      someVal: '123123'
    },
    'initialFee': {
      id: 'initialFee',
      showErrorStatus: false,
      disabledStatus: true,
      errorText: 'Значение поля высчитывается автоматически',
      type: 'text',
      labelText: 'Первоначальный взнос',
      placeholder: '0 руб.',
      nameInput: 'deal_initialFee',
      someVal: '123123'
    },
    'changeName':{
      labelText: 'Изменялись ли Ваши ФИО',
      currentValue: 'no',
      nameInput: 'questionary_changeName',
      inputs: {
        0: {
          label: 'Да',
          value: 'yes',
          id: 'changeName-yes',
          disabledStatus: true
        },
        1: {
          label: 'Нет',
          value: 'no',
          id: 'changeName-no',
          disabledStatus: true
        }
      }
    },
  };

  constructor(
      private _scrollToService: ScrollToService,
      @Inject(WINDOW) private window: Window,
      private FormBuilder: FormBuilder,
      private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * init form
   */
  initForm() {

    this.exampleForm = this.FormBuilder.group({
      'creditSum': new FormControl({value: '', disabled: this.exampleFormFields['creditSum'].disabledStatus}, Validators.required),
      'prepaid': new FormControl({value: '', disabled: this.exampleFormFields['prepaid'].disabledStatus}, Validators.required),
      'feature': new FormControl({value: '', disabled: this.exampleFormFields['feature'].disabledStatus}),
      'motherCapital': new FormControl({value: '', disabled: this.exampleFormFields['motherCapital'].disabledStatus}),
      'paymentForm': new FormControl({value: '', disabled: this.exampleFormFields['paymentForm'].disabledStatus}),
      'lawType': new FormControl({value: '', disabled: this.exampleFormFields['lawType'].disabledStatus}, Validators.required),
      'propertyCost': new FormControl({value: '', disabled: this.exampleFormFields['propertyCost'].disabledStatus}, Validators.required),
      'initialFee': new FormControl({value: '', disabled: this.exampleFormFields['initialFee'].disabledStatus}),
      'questionary_changeName': new FormControl(''),
    });
  }

  /**
   * scroll to elem
   * @param id
   */
  public triggerScrollTo(id) {
    let caluationForm: HTMLElement = document.getElementById('deal-form') as HTMLElement;
    let wrapper: HTMLElement = document.getElementById('wrapper') as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: caluationForm.offsetTop+wrapper.offsetTop
    };
    this._scrollToService.scrollTo(config);
  }

  /**
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  onSubmit(value: string) {

    if (this.exampleForm.valid){
      this.router.navigate(['deal-complete']);
    } else {
      let arrInvalid = [];
      for (let prop in this.exampleForm.controls) {
        if (this.exampleForm.controls[prop].status == 'INVALID' && this.exampleFormFields[prop]){
          this.exampleFormFields[prop].showErrorStatus = true;
          arrInvalid.push(prop);
        }
      }
      this.triggerScrollTo('block-'+arrInvalid[0]);
      return false;
    }
  }

  changeCurrentValueFeature(event){
    this.exampleFormFields['feature'].selectedItem = event;
    (event.value === 'tangibleCapital') ? this.showSumTangibleCapital = true : this.showSumTangibleCapital = false;
  }
  changeCurrentValuePaymentForm(event){
    this.exampleFormFields['paymentForm'].selectedItem = event;
  }
  changeCurrentValueLawType(event){
    this.exampleFormFields['paymentForm'].selectedItem = event;
  }
  changeCurrentValueTime(event, index){
    for (let i = 1; i < 4; i++ ){
      (i === index) ? this.exampleFormFields['time'+index].currentValue = event : this.exampleFormFields['time'+index].currentValue = '';
    }
    this.timeTextDate = 'в '+event;
    this.meetingTime = this.datapickerTextDate + this.timeTextDate;
  }

  changeCurrentValueDate(event){
    this.exampleFormFields['date'].date = event;
    let stringEvent = event+'';
    let weekDate = this.days[stringEvent.slice(0,3)];
    let dateDate = ((stringEvent.slice(8,9) == '0') ? '' : stringEvent.slice(8,9)) + stringEvent.slice(9,10);
    let monthDate = this.month[stringEvent.slice(4,7)];
    this.datapickerTextDate = weekDate+', '+dateDate+' '+monthDate+' ';
    this.meetingTime = this.datapickerTextDate + this.timeTextDate;
  }

}
