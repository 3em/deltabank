import { Component, OnInit, Inject } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { WINDOW } from "../window.service";
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  activeIndexNav: number = 7;
  finishStep: boolean = false;

  meetingTime: string;
  datapickerTextDate: string = '';
  timeTextDate: string = '';
  showSumTangibleCapital: boolean = false;
  dealform: FormGroup;

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


  dealFormFields: Object = {
    'creditSum': {
      id: 'creditSum',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Сумма кредита',
      placeholder: '0 руб.',
      nameInput: 'deal_creditSum',
      someVal: '',
      disabledStatus: false
    },
    'prepaid': {
      id: 'prepaid',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Аванс',
      placeholder: '0 руб.',
      nameInput: 'deal_prepaid',
      someVal: '',
      disabledStatus: false
    },
    'feature': {
      id: 'feature',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Особенность сделки',
      placeholder: '',
      nameInput: 'deal_feature',
      disabledStatus: false,
      values: [
        {name: 'Нет', value: 'no'},
        {name: 'Сделка с субсидией', value: 'subsidy'},
        {name: 'Сделка с мат. капиталом', value: 'tangibleCapital'}
      ],
      selectedItem: {name: 'Нет', value: 'no'},
      panelClass: 'b-questionary__dropdown'
    },
    'motherCapital': {
      id: 'motherCapital',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Сумма материнского капитала',
      placeholder: '0 руб.',
      nameInput: 'deal_motherCapital',
      someVal: '',
      disabledStatus: false
    },
    'paymentForm': {
      id: 'paymentForm',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Форма расчета',
      placeholder: '',
      nameInput: 'deal_paymentForm',
      disabledStatus: false,
      values: [
        {name: 'Наличный (ячейки)', value: 'cash'},
        {name: 'Безналичный', value: 'no-cash'},
        {name: 'Накопительный счет', value: 'savings-account'},
        {name: 'Накопительный счет+личные ячейки', value: 'savings-account&personal-account'},
        {name: 'Аккредитив', value: 'bill-of-credit'},
        {name: 'Аккредитив + ячейки', value: 'bill-of-credit&account'},
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'lawType': {
      id: 'lawType',
      showErrorStatus: false,
      disabledStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Вид права',
      placeholder: '',
      nameInput: 'deal_lawType',
      values: [
        {name: 'Общая совместная', value: 'type1'},
        {name: 'Индивидуальная', value: 'type2'},
        {name: 'Долевая', value: 'type3'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'propertyCost': {
      id: 'propertyCost',
      showErrorStatus: false,
      disabledStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Стоимость недвижимости',
      placeholder: '0 руб.',
      nameInput: 'deal_propertyCost',
      someVal: ''
    },
    'initialFee': {
      id: 'initialFee',
      showErrorStatus: false,
      disabledStatus: false,
      errorText: 'Значение поля высчитывается автоматически',
      type: 'text',
      labelText: 'Первоначальный взнос',
      placeholder: '0 руб.',
      nameInput: 'deal_initialFee',
      someVal: ''
    },
    'date': {
      id: 'date',
      date: '',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      placeholder: '01.01.1980',
      nameInput: 'deal_date',
      inlineStatus: true,
      navigator: true
    },
    'time1':{
      labelText: 'Утро',
      currentValue: '',
      nameInput: 'deal_time',
      inputs: {
        0: {
          label: '8:00',
          value: '8:00',
          id: 'time-1'
        },
        1: {
          label: '9:00',
          value: '9:00',
          id: 'time-2'
        },
        2: {
          label: '10:00',
          value: '10:00',
          id: 'time-3',
          disabledStatus: true
        },
        3: {
          label: '11:00',
          value: '11:00',
          id: 'time-4',
          disabledStatus: true
        }
      }
    },
    'time2':{
      labelText: 'День',
      currentValue: '',
      nameInput: 'deal_time',
      inputs: {
        0: {
          label: '12:00',
          value: '12:00',
          id: 'time-5'
        },
        1: {
          label: '13:00',
          value: '13:00',
          id: 'time-6'
        },
        2: {
          label: '14:00',
          value: '14:00',
          id: 'time-7'
        },
        3: {
          label: '15:00',
          value: '15:00',
          id: 'time-8'
        },
        4: {
          label: '16:00',
          value: '16:00',
          id: 'time-9'
        }
      }
    },
    'time3':{
      labelText: 'Вечер',
      currentValue: '',
      nameInput: 'deal_time',
      inputs: {
        0: {
          label: '17:00',
          value: '17:00',
          id: 'time-10'
        },
        1: {
          label: '18:00',
          value: '18:00',
          id: 'time-11'
        },
        2: {
          label: '19:00',
          value: '19:00',
          id: 'time-12'
        },
        3: {
          label: '20:00',
          value: '20:00',
          id: 'time-13'
        }
      }
    }
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

    this.dealform = this.FormBuilder.group({
      'creditSum': new FormControl({value: '', disabled: this.dealFormFields['creditSum'].disabledStatus}, Validators.required),
      'prepaid': new FormControl({value: '', disabled: this.dealFormFields['prepaid'].disabledStatus}, Validators.required),
      'feature': new FormControl({value: '', disabled: this.dealFormFields['feature'].disabledStatus}),
      'motherCapital': new FormControl({value: '', disabled: this.dealFormFields['motherCapital'].disabledStatus}),
      'paymentForm': new FormControl({value: '', disabled: this.dealFormFields['paymentForm'].disabledStatus}),
      'lawType': new FormControl({value: '', disabled: this.dealFormFields['lawType'].disabledStatus}, Validators.required),
      'propertyCost': new FormControl({value: '', disabled: this.dealFormFields['propertyCost'].disabledStatus}, Validators.required),
      'initialFee': new FormControl({value: '', disabled: this.dealFormFields['initialFee'].disabledStatus}),
      'date': new FormControl(''),
      'deal_time': new FormControl(''),
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

    if (this.dealform.valid){
      this.router.navigate(['deal-complete']);
    } else {
      let arrInvalid = [];
      for (let prop in this.dealform.controls) {
        if (this.dealform.controls[prop].status == 'INVALID' && this.dealFormFields[prop]){
          this.dealFormFields[prop].showErrorStatus = true;
          arrInvalid.push(prop);
        }
      }
      this.triggerScrollTo('block-'+arrInvalid[0]);
      return false;
    }
  }

  changeCurrentValueFeature(event){
    this.dealFormFields['feature'].selectedItem = event;
    (event.value === 'tangibleCapital') ? this.showSumTangibleCapital = true : this.showSumTangibleCapital = false;
  }
  changeCurrentValuePaymentForm(event){
    this.dealFormFields['paymentForm'].selectedItem = event;
  }
  changeCurrentValueLawType(event){
    this.dealFormFields['paymentForm'].selectedItem = event;
  }
  changeCurrentValueTime(event, index){
    for (let i = 1; i < 4; i++ ){
      (i === index) ? this.dealFormFields['time'+index].currentValue = event : this.dealFormFields['time'+index].currentValue = '';
    }
    this.timeTextDate = 'в '+event;
    this.meetingTime = this.datapickerTextDate + this.timeTextDate;
  }

  changeCurrentValueDate(event){
    this.dealFormFields['date'].date = event;
    let stringEvent = event+'';
    let weekDate = this.days[stringEvent.slice(0,3)];
    let dateDate = ((stringEvent.slice(8,9) == '0') ? '' : stringEvent.slice(8,9)) + stringEvent.slice(9,10);
    let monthDate = this.month[stringEvent.slice(4,7)];
    this.datapickerTextDate = weekDate+', '+dateDate+' '+monthDate+' ';
    this.meetingTime = this.datapickerTextDate + this.timeTextDate;
  }
}
