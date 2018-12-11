import { Component, OnInit, OnChanges, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-questionary-work',
  templateUrl: './questionary-work.component.html',
  styleUrls: ['./questionary-work.component.scss']
})
export class QuestionaryWorkComponent implements OnInit, DoCheck {

  activityInCompany_List: string[] = [
      'АХО / служба снабжения / служба закупок',
      'Бухгалтерия',
      'Врачебное дело/медицинские работник',
      'Государственная служба: военная служба, государственная гражданская служба, правоохранительная служба',
      'Домашний персонал/домработники',
      'Инженерно-техническая служба/контроль качества',
      'Индивидуальный предприниматель',
      'Маркетинг/реклама/связи с общественностью',
      'Мореплавание',
      'Обслуживание и работа с клиентами',
      'Обслуживание персонала',
      'Обучения/наставничество',
      'Продажи',
      'Производство',
      'Рабочий персонал',
      'Риск-менеджер/аналитика',
      'Секретариат/управление делами/офис-менеджмент',
      'Служба безопасности'
  ];

  companyActivity_List: string[] = [
    'Автомобильный бизнес: производство / продажа / обслуживание',
    'Аренда машин / оборудования / бытовых изделий',
    'Банки / биржи / инвестиции / лизинг',
    'Брокерские конторы',
    'Бухгалтерские услуги / консалтинг / аудит',
    'Государственные органы: законодательные / исполнительные / судебные',
    'Грузоперевозки / такси / логистические / складские услуги / ВЭД',
    'Деревообработка / производство целлюлозы / бумаги / картона / мебели',
    'Дизайн / благоустройство',
    'Добыча нефти / газа / переработка / транспортировка',
    'Добыча полезных ископаемых / переработка / транспортировка (кроме нефти и газа)',
    'ЖКХ',
    'Здравоохранение'
  ];

  questionaryFormFields: Object = {
    'officialWork': {
      id: 'officialWork',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Официальная работа',
      label: 'отсутствует, имею другие источники дохода',
      nameInput: 'questionary_officialWork',
      value: false
    },
    'INN': {
      id: 'INN',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'ИНН компании',
      placeholder: '',
      nameInput: 'questionary_INN',
      descText: 'Узнать ИНН работодателя можно по ссылке',
      descTextLink: 'egrul.nalog.ru',
      descTextLinkUrl: 'http://egrul.nalog.ru/',
      mask: '999999999999'
    },
    'companyName': {
      id: 'companyName',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Название компании',
      placeholder: '',
      nameInput: 'questionary_companyName',
    },
    'companyPhone': {
      id: 'companyPhone',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'tel',
      labelText: 'Телефон компании',
      placeholder: '+7 (000) 000-00-00',
      nameInput: 'questionary_companyPhone',
      alertHtmlShow: false,
      mask: '+7 (999) 999-99-99'
    },
    'companyAddress': {
      id: 'companyAddress',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Фактический адрес компании работодателя',
      placeholder: '',
      nameInput: 'questionary_companyAddress',
      descText: 'Введите одной строкой город, улицу, дом, корпус и номер квартиры/офиса'
    },
    'companySite': {
      id: 'companySite',
      showErrorStatus: false,
      errorText: 'Неверный формат',
      type: 'text',
      labelText: 'Сайт компании',
      placeholder: '',
      nameInput: 'questionary_companySite',
    },
    'employment': {
      id: 'employment',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Форма занятости',
      placeholder: '',
      nameInput: 'questionary_employment',
      values: [
        {name: 'По найму', value: 'hire'},
        {name: 'Владелец/учредитель', value: 'owner'},
        {name: 'Индивидуальный предприниматель', value: 'ie'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'shareBusiness': {
      id: 'shareBusiness',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Доля в бизнесе',
      placeholder: '',
      nameInput: 'questionary_shareBusiness',
      values: [
        {name: '1-25% включительно', value: 'less-25'},
        {name: 'Свыше 25%', value: 'more-25'}
      ],
      selectedItem: {},
      panelClass: 'b-questionary__dropdown'
    },
    'schedule': {
      id: 'schedule',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'График работы',
      placeholder: '',
      nameInput: 'questionary_schedule',
      values: [
        {name: 'Полный день', value: 'full-day'},
        {name: 'Сменный график', value: 'changeable'},
        {name: 'Гибкий график', value: 'flexible'},
        {name: 'Удаленная работа', value: 'remote'},
        {name: 'Вахтовый метод', value: 'shift-method'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'workNature': {
      id: 'workNature',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Характер работы',
      placeholder: '',
      nameInput: 'questionary_workNature',
      values: [
        {name: 'Офисная', value: 'office'},
        {name: 'Разъездная', value: 'travel'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'companyDate': {
      id: 'companyDate',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Дата создания компании',
      placeholder: '01.01.1980',
      nameInput: 'questionary_companyDate'
    },
    'taxation': {
      id: 'taxation',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Режим налогообложения',
      placeholder: '',
      nameInput: 'questionary_taxation',
      values: [
        {name: 'Общая система налогообложения', value: 'common'},
        {name: 'Упрощенная система налогообложения', value: 'simplified'},
        {name: 'Иные режимы налогообложения', value: 'other'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'position': {
      id: 'position',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Должность',
      placeholder: '',
      nameInput: 'questionary_position',
    },
    'isLawyer': {
      id: 'isLawyer',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Являетесь ли вы адвокатом или нотариусом?',
      placeholder: '',
      nameInput: 'questionary_isLawyer',
      values: [
        {name: 'Не являюсь', value: 'no'},
        {name: 'Являюсь адвокатом', value: 'lawyer'},
        {name: 'Являюсь нотариусом', value: 'notary'}
      ],
      selectedItem: {},
      panelClass: 'b-questionary__dropdown'
    },
    'jobLadder': {
      id: 'jobLadder',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Позиция в компании',
      placeholder: '',
      nameInput: 'questionary_jobLadder',
      values: [
        {name: 'Не требующая спец. квалификации', value: 'no-specialist'},
        {name: 'Специалист / старший специалист', value: 'specialist'},
        {name: 'Специалист ведущий/главный', value: 'senior-specialist'},
        {name: 'Руководитель среднего звена', value: 'middle-management'},
        {name: 'Руководитель высшего звена', value: 'senior-management'},
        {name: 'Учредитель, акционер', value: 'founder'},
        {name: 'Индивидуальный предприниматель', value: 'IE'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'activityInCompany': {
      id: 'activityInCompany',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Сфера деятельности в компании',
      placeholder: ''
    },
    'companyActivity': {
      id: 'companyActivity',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Сфера деятельности компании',
      placeholder: ''
    },
    'employmentDate': {
      id: 'employmentDate',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Дата трудоустройства',
      placeholder: '01.01.1980',
      nameInput: 'questionary_employmentDate'
    },
    'experience': {
      id: 'experience',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Стаж работы в этой сфере с 2009 года',
      placeholder: '',
      nameInput: 'questionary_experience',
      values: [
        {name: 'Менее года', value: 'less-1'},
        {name: 'Более года', value: 'more-1'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'anotherJob':{
      labelText: 'Есть работа по совместительству?',
      currentValue: 'no',
      nameInput: 'questionary_anotherJob',
      inputs: {
        0: {
          label: 'Да',
          value: 'yes',
          id: 'anotherJob-yes'
        },
        1: {
          label: 'Нет',
          value: 'no',
          id: 'anotherJob-no'
        }
      }
    },
    'INN_dop': {
      id: 'INN_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'ИНН компании',
      placeholder: '',
      nameInput: 'questionary_INN_dop',
      descText: 'Узнать ИНН работодателя можно по ссылке',
      descTextLink: 'egrul.nalog.ru',
      descTextLinkUrl: 'http://egrul.nalog.ru/',
      mask: '999999999999'
    },
    'companyName_dop': {
      id: 'companyName_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Название компании',
      placeholder: '',
      nameInput: 'questionary_companyName_dop',
    },
    'companyPhone_dop': {
      id: 'companyPhone_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'tel',
      labelText: 'Телефон компании',
      placeholder: '+7 (000) 000-00-00',
      nameInput: 'questionary_companyPhone_dop',
      alertHtmlShow: false,
      mask: '+7 (999) 999-99-99'
    },
    'companyAddress_dop': {
      id: 'companyAddress_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Фактический адрес компании работодателя',
      placeholder: '',
      nameInput: 'questionary_companyAddress_dop',
      descText: 'Введите одной строкой город, улицу, дом, корпус и номер квартиры/офиса'
    },
    'companySite_dop': {
      id: 'companySite_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Сайт компании',
      placeholder: '',
      nameInput: 'questionary_companySite_dop',
    },
    'employment_dop': {
      id: 'employment_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Форма занятости',
      placeholder: '',
      nameInput: 'questionary_employment_dop',
      values: [
        {name: 'По найму', value: 'hire'},
        {name: 'Владелец/учредитель', value: 'owner'},
        {name: 'Индивидуальный предприниматель', value: 'ie'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'shareBusiness_dop': {
      id: 'shareBusiness_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Доля в бизнесе',
      placeholder: '',
      nameInput: 'questionary_shareBusiness_dop',
      values: [
        {name: '1-25% включительно', value: 'less-25'},
        {name: 'Свыше 25%', value: 'more-25'}
      ],
      selectedItem: {},
      panelClass: 'b-questionary__dropdown'
    },
    'schedule_dop': {
      id: 'schedule_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'График работы',
      placeholder: '',
      nameInput: 'questionary_schedule_dop',
      values: [
        {name: 'Полный день', value: 'full-day'},
        {name: 'Сменный график', value: 'changeable'},
        {name: 'Гибкий график', value: 'flexible'},
        {name: 'Удаленная работа', value: 'remote'},
        {name: 'Вахтовый метод', value: 'shift-method'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'workNature_dop': {
      id: 'workNature_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Характер работы',
      placeholder: '',
      nameInput: 'questionary_workNature_dop',
      values: [
        {name: 'Офисная', value: 'office'},
        {name: 'Разъездная', value: 'travel'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'companyDate_dop': {
      id: 'companyDate_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Дата создания компании',
      placeholder: '01.01.1980',
      nameInput: 'questionary_companyDate_dop'
    },
    'taxation_dop': {
      id: 'taxation_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Режим налогообложения',
      placeholder: '',
      nameInput: 'questionary_taxation_dop',
      values: [
        {name: 'Общая система налогообложения', value: 'common'},
        {name: 'Упрощенная система налогообложения', value: 'simplified'},
        {name: 'Иные режимы налогообложения', value: 'other'}
      ],
      selectedItem: {},
      panelClass: 'b-questionary__dropdown'
    },
    'position_dop': {
      id: 'position_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Должность',
      placeholder: '',
      nameInput: 'questionary_position_dop',
    },
    'isLawyer_dop': {
      id: 'isLawyer_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Являетесь ли вы адвокатом или нотариусом?',
      placeholder: '',
      nameInput: 'questionary_isLawyer_dop',
      values: [
          {name: 'Не являюсь', value: 'no'},
          {name: 'Являюсь адвокатом', value: 'lawyer'},
          {name: 'Являюсь нотариусом', value: 'notary'}
          ],
      selectedItem: {},
      panelClass: 'b-questionary__dropdown'
    },
    'jobLadder_dop': {
      id: 'jobLadder_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Позиция в компании',
      placeholder: '',
      nameInput: 'questionary_jobLadder_dop',
      values: [
        {name: 'Не требующая спец. квалификации', value: 'no-specialist'},
        {name: 'Специалист / старший специалист', value: 'specialist'},
        {name: 'Специалист ведущий/главный', value: 'senior-specialist'},
        {name: 'Руководитель среднего звена', value: 'middle-management'},
        {name: 'Руководитель высшего звена', value: 'senior-management'},
        {name: 'Учредитель, акционер', value: 'founder'},
        {name: 'Индивидуальный предприниматель', value: 'IE'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'activityInCompany_dop': {
      id: 'activityInCompany_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Сфера деятельности в компании',
      placeholder: ''
    },
    'companyActivity_dop': {
      id: 'companyActivity_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Сфера деятельности компании',
      placeholder: ''
    },
    'employmentDate_dop': {
      id: 'employmentDate_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Дата трудоустройства',
      placeholder: '01.01.1980',
      nameInput: 'questionary_employmentDate_dop'
    },
    'experience_dop': {
      id: 'experience_dop',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Стаж работы в этой сфере с 2009 года',
      placeholder: '',
      nameInput: 'questionary_experience_dop',
      values: [
        {name: 'Менее года', value: 'less-1'},
        {name: 'Более года', value: 'more-1'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
  };

  @Input() group: FormGroup;
  @Input() showErrors: boolean;
  @Input() isAnotherJob: boolean;
  @Input() showErrorScrollBlock: string;

  @Output() changeIsAnotherJob = new EventEmitter<boolean>();
  @Output() changeIsOfficialJob = new EventEmitter<boolean>();
  @Output() showMoreCompInfo = new EventEmitter<boolean>();
  @Output() showMoreCompInfoDop = new EventEmitter<boolean>();

  statusShowDopWork: boolean = false;
  statusShareBusiness: boolean = false;
  statusShareBusinessDop: boolean = false;
  statusMoreCompomyInfo: boolean = false;
  statusMoreCompomyInfoDop: boolean = false;

  formGroupTitle: string = 'questionaryformWork';

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
    let thisElem: HTMLElement = document.getElementById('work') as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: questionaryElem.offsetTop + thisElem.offsetTop - 80
    };
    this._scrollToService.scrollTo(config);
  }

  changeCurrentValueOfficialWork(event){
    this.questionaryFormFields['officialWork'].value = event;
    this.changeIsOfficialJob.emit(event);
  }
  changeCurrentValueShareBusiness(event){
    this.questionaryFormFields['shareBusiness'].selectedItem = event;
  }
  changeCurrentValueShareBusinessDop(event){
    this.questionaryFormFields['shareBusiness_dop'].selectedItem = event;
  }
  changeCurrentValueEmployment(event){
    this.questionaryFormFields['employment'].selectedItem = event;

    (event.value === 'owner') ? this.statusShareBusiness = true : this.statusShareBusiness = false;
    (event.value === 'hire') ? this.statusMoreCompomyInfo = false : this.statusMoreCompomyInfo = true;
    this.showMoreCompInfo.emit(this.statusMoreCompomyInfo);

  }
  changeCurrentValueEmploymentDop(event){
    this.questionaryFormFields['employment_dop'].selectedItem = event;

    (event.value === 'owner') ? this.statusShareBusinessDop = true : this.statusShareBusinessDop = false;
    (event.value === 'hire') ? this.statusMoreCompomyInfoDop = false : this.statusMoreCompomyInfoDop = true;
    this.showMoreCompInfoDop.emit(this.statusMoreCompomyInfoDop);
  }
  changeCurrentValueSchedule(event){
    this.questionaryFormFields['schedule'].selectedItem = event;
  }
  changeCurrentValueScheduleDop(event){
    this.questionaryFormFields['schedule_dop'].selectedItem = event;
  }
  changeCurrentValueWorkNature(event){
    this.questionaryFormFields['workNature'].selectedItem = event;
  }
  changeCurrentValueWorkNatureDop(event){
    this.questionaryFormFields['workNature_dop'].selectedItem = event;
  }
  changeCurrentValueTaxation(event){
    this.questionaryFormFields['isLawyer'].selectedItem = event;
  }
  changeCurrentValueTaxationDop(event){
    this.questionaryFormFields['isLawyer_dop'].selectedItem = event;
  }
  changeCurrentValueIsLawyer(event){
    this.questionaryFormFields['taxation'].selectedItem = event;
  }
  changeCurrentValueIsLawyerDop(event){
    this.questionaryFormFields['taxation_dop'].selectedItem = event;
  }
  changeCurrentValueJobLadder(event){
    this.questionaryFormFields['jobLadder'].selectedItem = event;
  }
  changeCurrentValueJobLadderDop(event){
    this.questionaryFormFields['jobLadder_dop'].selectedItem = event;
  }
  changeCurrentValueExperience(event){
    this.questionaryFormFields['experience'].selectedItem = event;
  }
  changeCurrentValueExperienceDop(event){
    this.questionaryFormFields['experience_dop'].selectedItem = event;
  }
  changeCurrentValueCompanyDate(event){
    this.questionaryFormFields['companyDate'].date = event;
  }
  changeCurrentValueCompanyDateDop(event){
    this.questionaryFormFields['companyDate_dop'].date = event;
  }
  changeCurrentValueEmploymentDate(event){
    this.questionaryFormFields['employmentDate'].date = event;
  }
  changeCurrentValueEmploymentDateDop(event){
    this.questionaryFormFields['employmentDate_dop'].date = event;
  }
  changeCurrentValueAnotherJob(event){
    this.questionaryFormFields['anotherJob'].currentValue = event;

    (this.questionaryFormFields['anotherJob'].currentValue === 'yes') ? this.statusShowDopWork = true : this.statusShowDopWork = false;

    this.isAnotherJob = this.statusShowDopWork;

    this.changeIsAnotherJob.emit(this.isAnotherJob);
  }

}
