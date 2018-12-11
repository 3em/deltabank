import { Component, OnInit, Input, DoCheck, EventEmitter, Output, OnChanges } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-participants-item',
  templateUrl: './participants-item.component.html',
  styleUrls: ['./participants-item.component.scss']
})
export class ParticipantsItemComponent implements OnInit, DoCheck, OnChanges {

  @Input() group: FormGroup;
  @Input() showErrors: boolean;
  @Input() showErrorScrollBlock: string;
  @Input() item: string;
  @Input() hideStatus: boolean;
  @Input() proveStatus: boolean;
  proveStatus_Temp: boolean = false;
  proveStatusDisabled: boolean = false;
  @Input() toggleAccordionList: any;
  @Input() arrInvalidFirst: any;


  participantsFormFields: Object = {};
  individualStatus: boolean = null;
  countryMask: string = 'passport';
  personalDocNumberMaskStatus: boolean = true;
  roleStatus: boolean = true;
  signTypeStatus: boolean = true;
  proveStatusText: string;
  hideBarName: string;
  hideStatusThisItem: boolean;

  countries: string[] = ['Англия', 'Беларусия', 'Венгрия', 'Германия', 'Дания', 'Италия', 'Испания'];


  @Output() pushRoleArr = new EventEmitter<any>();
  @Output() changeStatusPersonalType = new EventEmitter<any>();
  @Output() changeStatusSignType = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<any>();

  constructor(
      private fb: FormBuilder,
      private _scrollToService: ScrollToService
  ) { }

  ngOnInit() {
    this.participantsFormFields = {
      [this.item+'Role']:{
        labelText: 'Роль',
        currentValue: 'seller',
        nameInput: this.item+'_role',
        inputs: {
          0: {
            label: 'Продавец',
            value: 'seller',
            id: this.item+'_role-seller'
          },
          1: {
            label: 'Участник',
            value: 'participant',
            id: this.item+'_role-participant'
          }
        }
      },
      [this.item+'Contractor']: {
        id: this.item+'Contractor',
        showErrorStatus: false,
        errorText: 'Обязательно для заполнения',
        labelText: 'Участник договора',
        placeholder: '',
        nameInput: this.item+'_Contractor',
        appendElem: 'body',
        values: [
          {name: 'Заемщик', value: 'borrower'},
          {name: 'Созаемщик', value: 'co-borrower'},
          {name: 'Поручитель', value: 'guarantor'}
        ],
        selectedItem: '',
        panelClass: 'dropdown-body'
      },
      [this.item+'personalType']: {
        id: this.item+'personalType',
        showErrorStatus: false,
        errorText: 'Обязательно для заполнения',
        labelText: 'Тип лица',
        placeholder: '',
        nameInput: this.item+'_personalType',
        appendElem: 'body',
        values: [
          {name: 'Физическое лицо', value: 'individual'},
          {name: 'Юридическое лицо', value: 'entity'},
          {name: 'ЗПИФ', value: 'zpif'}
        ],
        selectedItem: '',
        panelClass: 'dropdown-body'
      },
      [this.item+'nameCompany']: {
        id: this.item+'nameCompany',
        showErrorStatus: false,
        errorText: 'Обязательно для заполнения',
        type: 'text',
        labelText: 'ФИО / Название',
        placeholder: '',
        nameInput: this.item+'_nameCompany',
        someVal: ''
      },
      [this.item+'surname']: {
        id: this.item+'surname',
        showErrorStatus: false,
        errorText: 'Обязательно для заполнения',
        type: 'text',
        labelText: 'Фамилия',
        placeholder: '',
        nameInput: this.item+'_surname',
        someVal: '',
        cyrillicValidation: true
      },
      [this.item+'name']: {
        id: this.item+'name',
        showErrorStatus: false,
        errorText: 'Обязательно для заполнения',
        type: 'text',
        labelText: 'Имя',
        placeholder: '',
        nameInput: this.item+'_name',
        someVal: '',
        cyrillicValidation: true
      },
      [this.item+'secondName']: {
        id: this.item+'secondName',
        showErrorStatus: false,
        errorText: 'Обязательно для заполнения',
        type: 'text',
        labelText: 'Отчество',
        placeholder: '',
        nameInput: this.item+'_secondName',
        someVal: '',
        cyrillicValidation: true
      },
      [this.item+'Sex']:{
        labelText: 'Пол',
        currentValue: 'male',
        nameInput: this.item+'_sex',
        inputs: {
          0: {
            label: 'Мужской',
            value: 'male',
            id: this.item+'_male'
          },
          1: {
            label: 'Женский',
            value: 'female',
            id: this.item+'_female'
          }
        }
      },
      [this.item+'Birthday']: {
        id: this.item+'Birthday',
        date: '',
        showErrorStatus: false,
        errorText: 'Обязательно для заполнения',
        labelText: 'Дата рождения',
        placeholder: '01.01.1980',
        nameInput: this.item+'_birthday'
      },
      [this.item+'Citizenship']: {
        id: this.item+'Citizenship',
        showErrorStatus: false,
        errorText: 'Обязательно для заполнения',
        labelText: 'Гражданство',
        placeholder: ''
      },
      [this.item+'personalDoc']: {
        id: this.item+'personalDoc',
        showErrorStatus: false,
        errorText: 'Обязательно для заполнения',
        labelText: 'Документ, уд. личность',
        placeholder: '',
        nameInput: this.item+'_personalDoc',
        values: [
          {name: 'Паспорт гражданина РФ', value: 'passport'},
          {name: 'Паспорт иностранного гражданина', value: 'foreigner-passport'}
        ],
        selectedItem: {name: 'Паспорт гражданина РФ', value: 'passport'},
        panelClass: 'b-questionary__dropdown'
      },
      [this.item+'personalDocNumber']: {
        id: this.item+'personalDocNumber',
        showErrorStatus: false,
        errorText: 'Укажите серию и номер паспорта',
        type: 'text',
        labelText: 'Серия и номер',
        placeholder: '',
        nameInput: this.item+'_personalDocNumber',
        mask: '99 99 999999'
      },
      [this.item+'docsIssueDate']: {
        id: this.item+'docsIssueDate',
        date: '',
        showErrorStatus: false,
        errorText: '',
        labelText: 'Дата выдачи',
        placeholder: '01.01.1980',
        nameInput: this.item+'_docsIssueDate'
      },
      [this.item+'passportIssuedBy']: {
        id: this.item+'passportIssuedBy',
        showErrorStatus: false,
        errorText: '',
        type: 'text',
        labelText: 'Кем выдан',
        placeholder: '',
        nameInput: this.item+'_passportIssuedBy'
      },
      [this.item+'unitCode']: {
        id: this.item+'unitCode',
        showErrorStatus: false,
        errorText: '',
        type: 'text',
        labelText: 'Код подразделения',
        placeholder: '',
        mask: '999-999',
        nameInput: this.item+'_unitCode'
      },
      [this.item+'burnPlace']: {
        id: this.item+'burnPlace',
        showErrorStatus: false,
        errorText: '',
        type: 'text',
        labelText: 'Место рождения',
        placeholder: '',
        nameInput: this.item+'_burnPlace'
      },
      [this.item+'SignType']:{
        labelText: 'Как подписать?',
        currentValue: 'email',
        nameInput: this.item+'_SignType',
        inputs: {
          0: {
            label: 'Запросить по почте',
            value: 'email',
            id: this.item+'_SignType-email'
          },
          1: {
            label: 'Подписать вручную',
            value: 'sign',
            id: this.item+'_SignType-sign'
          }
        }
      },
      [this.item+'email']: {
        id: this.item+'email',
        showErrorStatus: false,
        errorText: 'Почта в формате: pochta@gmail.com',
        type: 'email',
        labelText: 'Почта участника сделки',
        placeholder: 'pochta@mail.ru',
        nameInput: this.item+'_email'
      },
    };

    this.proveStatusText = this.changeTextStatus();
    this.setNametoBar(true);
  }

  changeTextStatus(){
    return (this.proveStatus) ? 'Подтверждено' : 'Ждем подтверждение';
  }

  ngDoCheck(){
    if (this.showErrors){
      this.validateAboutForm();
    }
  }
  ngOnChanges(){
    let status = false;
    if (this.arrInvalidFirst.length > 0){
      for (let prop in this.arrInvalidFirst) {

        if (this.item == this.arrInvalidFirst[prop]){
          status = true;
        }

      }
    }

    if (!status){
      this.hideStatusThisItem = this.hideStatus;
    } else {
      this.hideStatusThisItem = false;
    }

  }

  setNametoBar(status){
    if (status){
      this.hideBarName = (this.roleStatus) ? this.participantsFormFields[this.item+'surname'].someVal+' '+this.participantsFormFields[this.item+'name'].someVal+' '+this.participantsFormFields[this.item+'secondName'].someVal : this.participantsFormFields[this.item+'Contractor'].selectedItem.name;
    } else {
      this.hideBarName = (this.roleStatus) ? this.participantsFormFields[this.item+'nameCompany'].someVal : this.participantsFormFields[this.item+'Contractor'].selectedItem.name;
    }

    if ((this.hideBarName && this.hideBarName.replace(/\s+/g, '') == '') || !this.hideBarName){
      this.hideBarName = (this.roleStatus) ? 'Новый продавец' : 'Новый участник';
    }
  }

  accordionToggle(event){
    event.preventDefault();
    this.hideStatusThisItem = !this.hideStatusThisItem;
  }

  deleteUserClick(e){
    e.preventDefault();
    this.deleteUser.emit(this.item);
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
        if (this.group.controls[prop].status == 'INVALID' && this.participantsFormFields[prop]){
          this.participantsFormFields[prop].showErrorStatus = true;
          arrInvalid.push(prop);
        }
      }
      if (this.item === this.showErrorScrollBlock){
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
    let parentBox: HTMLElement = document.getElementById('participants-list-'+this.item) as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: parentBox.offsetTop - 20
    };
    this._scrollToService.scrollTo(config);
  }

  changeCurrentValueRole(event){
    this.participantsFormFields[this.item+'Role'].currentValue = event;
    (event === 'seller') ? this.roleStatus = true : this.roleStatus = false;
    (event === 'participant') ? this.pushRoleArr.emit({id: this.item, status: true}) : this.pushRoleArr.emit({id: this.item, status: false});
    this.setNametoBar(true);

    if (this.proveStatus_Temp && this.proveStatus){
      (event === 'participant') ? this.proveStatus = false : this.chechSignTypeTextStatus(this.participantsFormFields[this.item+'SignType'].currentValue);
      this.proveStatusText = this.changeTextStatus();
    }

    this.disableStatusBar();
  }

  changeCurrentValueSignType(event){
    this.participantsFormFields[this.item+'SignType'].currentValue = event;
    (event === 'email') ? this.signTypeStatus = true : this.signTypeStatus = false;
    (event !== 'email') ? this.changeStatusSignType.emit({id: this.item, status: true}) : this.changeStatusSignType.emit({id: this.item, status: false});

    this.chechSignTypeTextStatus(event);
    this.proveStatusText = this.changeTextStatus();
  }

  chechSignTypeTextStatus(e){
    if (this.proveStatus_Temp && this.proveStatus){
      (e === 'email') ? this.proveStatus = false : this.proveStatus = this.proveStatus_Temp;
    }
  }

  changeCurrentValueSex(event){
    this.participantsFormFields[this.item+'Sex'].currentValue = event;
  }

  changeCurrentValuePersonalType(event){
    this.participantsFormFields[this.item+'personalType'].selectedItem = event;
    (event.value === 'individual') ? this.individualStatus = true : this.individualStatus = false;
    (event.value !== 'individual') ? this.changeStatusPersonalType.emit({id: this.item, status: true}) : this.changeStatusPersonalType.emit({id: this.item, status: false});
    this.disableStatusBar();
  }

  changeCurrentValueContractor(event){
    this.participantsFormFields[this.item+'Contractor'].selectedItem = event;
    this.setNametoBar(true);
  }

  changeCurrentValueDate(event){
    this.participantsFormFields[this.item+'Birthday'].date = event;
  }

  changeCurrentValueDocsIssueDate(event){
    this.participantsFormFields[this.item+'docsIssueDate'].date = event;
  }

  changeCurrentValuePersonalDoc(event){
    this.participantsFormFields[this.item+'personalDoc'].selectedItem = event;
    (event.value === this.countryMask) ? this.personalDocNumberMaskStatus = true : this.personalDocNumberMaskStatus = false;
  }

  changeCurrentValueNameCompany(event){
    this.participantsFormFields[this.item+'nameCompany'].someVal = event;

    this.setNametoBar(false);
  }

  changeCurrentValueSurname(event){
    this.participantsFormFields[this.item+'surname'].someVal = event;

    this.setNametoBar(true);
  }

  changeCurrentValueName(event){
    this.participantsFormFields[this.item+'name'].someVal = event;

    this.setNametoBar(true);
  }

  changeCurrentValueSecondName(event){
    this.participantsFormFields[this.item+'secondName'].someVal = event;

    this.setNametoBar(true);
  }

  changeProveStatus(event){
    this.proveStatus_Temp = event;
    this.proveStatus = event;
    this.proveStatusText = this.changeTextStatus();
  }

  disableStatusBar(){
    if (this.participantsFormFields[this.item+'Role'].currentValue == 'participant'){
      this.proveStatusDisabled = true;
    } else {
      (this.participantsFormFields[this.item+'personalType'].selectedItem.value == 'individual') ? this.proveStatusDisabled = false : this.proveStatusDisabled = true;

    }
  }


}
