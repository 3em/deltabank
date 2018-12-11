import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import {isBoolean} from "util";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  activeIndexNav: number = 4;
  finishStep: boolean = false;

  participantsform: FormGroup;
  showErrors: boolean;
  showErrorScrollBlock: any;
  objectKeys = Object.keys;
  roleArr: string[] = [];
  validatorsStopStatusListRole: Object = {'item1': true};
  validatorsStopStatusListPersonalType: Object = {'item1': true};
  validatorsStopStatusListSignType: Object = {'item1': true};
  statusPersonalType: string[] = [];
  statusSignType: string[] = [];
  toggleAccordionList: Object = {'item1': false};
  proveStatusList: Object = {'item1': false};

  arrInvalidFirst: string[] = [];

  constructor(
      private FormBuilder: FormBuilder,
      private router: Router,
      private _scrollToService: ScrollToService
  ) { }

  /**
   * add participant id to show or hide Role for validation fn
   * @param event
   */
  pushRoleArr(event){

    if (event.status) {
      this.roleArr.push(event.id);
    } else {
      let index = this.roleArr.indexOf(event.id);
      if (index !== -1) this.roleArr.splice(index, 1);
    }

  }

  /**
   * change personal type status for validation fn
   * @param event
   */
  changeStatusPersonalType(event){
    let index = this.statusPersonalType.indexOf(event.id);
    if (event.status) {
      if (index === -1) this.statusPersonalType.push(event.id)
    } else {
      if (index !== -1) this.statusPersonalType.splice(index, 1);
    }
  }

  changeStatusSignType(event){
    if (event.status) {
      this.statusSignType.push(event.id);
    } else {
      let index = this.statusSignType.indexOf(event.id);
      if (index !== -1) this.statusSignType.splice(index, 1);
    }
  }

  ngOnInit() {
    this.initForm();
  }


  /**
   * init form
   */
  initForm() {
    this.participantsform = this.FormBuilder.group({
      item1: this.FormBuilder.group({
        'item1_role': new FormControl('', Validators.required),
        'item1Contractor': new FormControl({value: '', disabled: true}, Validators.required),
        'item1personalType': new FormControl('', Validators.required),
        'item1surname': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[а-яёА-ЯЁ -]+')])),
        'item1name': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[а-яёА-ЯЁ -]+')])),
        'item1secondName': new FormControl('', this.latinValidation),
        'item1nameCompany': new FormControl(''),
        'item1_sex': new FormControl(''),
        'item1Birthday': new FormControl('', Validators.required),
        'item1Citizenship': new FormControl(''),
        'item1personalDoc': new FormControl({name: 'Паспорт гражданина РФ', value: 'passport'}, Validators.required),
        'item1personalDocNumber': new FormControl(''),
        'item1docsIssueDate': new FormControl(''),
        'item1passportIssuedBy': new FormControl(''),
        'item1unitCode': new FormControl(''),
        'item1burnPlace': new FormControl(''),
        'item1_SignType': new FormControl(''),
        'item1email': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])
      },{ validator: (group) => {

        // sign validation
        if (this.statusSignType.indexOf('item1') !== -1 && this.validatorsStopStatusListSignType['item1']){
          this.validatorsStopStatusListSignType['item1'] = false;
          group.controls.item1email.disable();
        } else if (this.statusSignType.indexOf('item1') === -1 && !this.validatorsStopStatusListSignType['item1']) {
          this.validatorsStopStatusListSignType['item1'] = true;
          group.controls.item1email.enable();
        }

        // personal type fields validation
        if (this.statusPersonalType.indexOf('item1') !== -1 && this.validatorsStopStatusListPersonalType['item1']){
          this.validatorsStopStatusListPersonalType['item1'] = false;

          group.controls.item1nameCompany.validator = Validators.required;

          group.controls.item1Birthday.disable();
          group.controls.item1personalDoc.disable();
          group.controls.item1surname.disable();
          group.controls.item1name.disable();
          group.controls.item1secondName.disable();
          group.controls.item1email.disable();
          group.controls.item1nameCompany.enable();
        } else if (this.statusPersonalType.indexOf('item1') === -1 && !this.validatorsStopStatusListPersonalType['item1']) {
          this.validatorsStopStatusListPersonalType['item1'] = true;
          group.controls.item1Birthday.enable();
          group.controls.item1personalDoc.enable();
          group.controls.item1surname.enable();
          group.controls.item1name.enable();
          group.controls.item1secondName.enable();
          group.controls.item1email.enable();
          group.controls.item1nameCompany.disable();
        }

        // role people validation
        if (this.roleArr.indexOf('item1') !== -1 && this.validatorsStopStatusListRole['item1']) {

          this.validatorsStopStatusListRole['item1'] = false;
          group.controls.item1nameCompany.disable();
          group.controls.item1personalType.disable();
          group.controls.item1surname.disable();
          group.controls.item1name.disable();
          group.controls.item1secondName.disable();
          group.controls.item1Birthday.disable();
          group.controls.item1personalDoc.disable();
          group.controls.item1email.disable();
          group.controls.item1Contractor.enable();
        } else if (this.roleArr.indexOf('item1') === -1 && !this.validatorsStopStatusListRole['item1']) {

          this.validatorsStopStatusListRole['item1'] = true;
          group.controls.item1Contractor.disable();
          group.controls.item1personalType.enable();

          // personal type
          if (this.statusPersonalType.indexOf('item1') !== -1 ){
            group.controls.item1nameCompany.validator = Validators.required;
            group.controls.item1Birthday.disable();
            group.controls.item1personalDoc.disable();
            group.controls.item1surname.disable();
            group.controls.item1name.disable();
            group.controls.item1secondName.disable();
            group.controls.item1email.disable();
            group.controls.item1nameCompany.enable();
          } else {
            group.controls.item1Birthday.enable();
            group.controls.item1personalDoc.enable();
            group.controls.item1surname.enable();
            group.controls.item1name.enable();
            group.controls.item1secondName.enable();
            group.controls.item1nameCompany.disable();

            // sign
            (this.statusSignType.indexOf('item1') !== -1 ) ? group.controls.item1email.disable() : group.controls.item1email.enable();
          }
        }

      }})
    });
  }

  /**
   * get first block with errors
   * @returns {boolean}
   */
  getFirstErrorBlock(){
    let arrInvalid = [];
    this.arrInvalidFirst = [];

    for (let prop in this.participantsform.controls) {
      if (!this.participantsform.controls[prop].valid){
        let $prevControl = this.participantsform.controls[prop];
        this.arrInvalidFirst.push(prop);

        for (let prop2 in $prevControl['controls']) {
          if (!$prevControl['controls'][prop2].valid && $prevControl['controls'][prop2].status != 'DISABLED' ){
            this.showErrorScrollBlock = prop2;
            arrInvalid.push(prop2);
          }
        }

      }
    }
    setTimeout(() => this.triggerScrollTo('block-'+arrInvalid[0]), 100);

  };


  /**
   * submit and validate
   */
  onSubmit(){

    if (this.participantsform.valid){

      this.router.navigate(['/participants-docs']);

    } else {

      this.getFirstErrorBlock();

      this.showErrors = true;
      setTimeout(() => {
        this.showErrors = false;
      }, 10);

    }
  }

  /**
   * scroll to elem
   * @param id
   */
  public triggerScrollTo(id) {
    let $block: HTMLElement = document.getElementById(id) as HTMLElement;

    let offsetTopAll = this.getOffsetTop($block);

    const config: ScrollToConfigOptions = {
      target: id,
      offset: offsetTopAll - $block.offsetTop
    };
    this._scrollToService.scrollTo(config);
  }

  /**
   * get offset all parent
   * @param elem
   * @returns {number}
   */
  getOffsetTop( elem ){
    let offsetTop = 0;
    do {
      if ( !isNaN( elem.offsetTop ) )
      {
        offsetTop += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );
    return offsetTop;
  }

  /**
   * add new Form Group
   * @param itemsLength
   */
  addNewFormGroup(itemsLength){

    this.participantsform.addControl('item' + itemsLength, this.FormBuilder.group({
      ['item' + itemsLength + '_role']: new FormControl('', Validators.required),
      ['item' + itemsLength + 'personalType']: new FormControl('', Validators.required),
      ['item' + itemsLength + 'Contractor']: new FormControl({value: '', disabled: true}, Validators.required),
      ['item' + itemsLength + 'surname']: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[а-яёА-ЯЁ -]+')])),
      ['item' + itemsLength + 'name']: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[а-яёА-ЯЁ -]+')])),
      ['item' + itemsLength + 'secondName']: new FormControl('', this.latinValidation),
      ['item' + itemsLength + 'nameCompany']: new FormControl(''),
      ['item' + itemsLength + '_sex']: new FormControl(''),
      ['item' + itemsLength + 'Birthday']: new FormControl('', Validators.required),
      ['item' + itemsLength + 'Citizenship']: new FormControl(''),
      ['item' + itemsLength + 'personalDoc']: new FormControl({name: 'Паспорт гражданина РФ', value: 'passport'}, Validators.required),
      ['item' + itemsLength + 'personalDocNumber']: new FormControl(''),
      ['item' + itemsLength + 'docsIssueDate']: new FormControl(''),
      ['item' + itemsLength + 'passportIssuedBy']: new FormControl(''),
      ['item' + itemsLength + 'unitCode']: new FormControl(''),
      ['item' + itemsLength + 'burnPlace']: new FormControl(''),
      ['item' + itemsLength + '_SignType']: new FormControl(''),
      ['item' + itemsLength + 'email']: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])
    }, { validator: (group) => {

      // sign validation
      if (this.statusSignType.indexOf('item'+itemsLength) !== -1 && this.validatorsStopStatusListSignType['item'+itemsLength]){
        this.validatorsStopStatusListSignType['item'+itemsLength] = false;
        group.controls['item' + itemsLength + 'email'].disable();
      } else if (this.statusSignType.indexOf('item'+itemsLength) === -1 && !this.validatorsStopStatusListSignType['item'+itemsLength]) {
        this.validatorsStopStatusListSignType['item'+itemsLength] = true;
        group.controls['item' + itemsLength + 'email'].enable();
      }

      // personal type fields validation

      if (this.statusPersonalType.indexOf('item'+itemsLength) !== -1 && this.validatorsStopStatusListPersonalType['item'+itemsLength]){
        this.validatorsStopStatusListPersonalType['item'+itemsLength] = false;

        group.controls['item' + itemsLength + 'nameCompany'].validator = Validators.required;

        group.controls['item' + itemsLength + 'Birthday'].disable();
        group.controls['item' + itemsLength + 'personalDoc'].disable();
        group.controls['item' + itemsLength + 'surname'].disable();
        group.controls['item' + itemsLength + 'name'].disable();
        group.controls['item' + itemsLength + 'secondName'].disable();
        group.controls['item' + itemsLength + 'email'].disable();
        group.controls['item' + itemsLength + 'nameCompany'].enable();

      } else if (this.statusPersonalType.indexOf('item'+itemsLength) === -1 && !this.validatorsStopStatusListPersonalType['item'+itemsLength]) {
        this.validatorsStopStatusListPersonalType['item'+itemsLength] = true;
        group.controls['item' + itemsLength + 'email'].enable();
        group.controls['item' + itemsLength + 'Birthday'].enable();
        group.controls['item' + itemsLength + 'personalDoc'].enable();
        group.controls['item' + itemsLength + 'surname'].enable();
        group.controls['item' + itemsLength + 'name'].enable();
        group.controls['item' + itemsLength + 'secondName'].enable();
        group.controls['item' + itemsLength + 'nameCompany'].disable();
      }

      // role people validation
      if (this.roleArr.indexOf('item'+itemsLength) !== -1 && this.validatorsStopStatusListRole['item'+itemsLength]) {
        this.validatorsStopStatusListRole['item'+itemsLength] = false;
        group.controls['item' + itemsLength + 'surname'].disable();
        group.controls['item' + itemsLength + 'name'].disable();
        group.controls['item' + itemsLength + 'secondName'].disable();
        group.controls['item' + itemsLength + 'nameCompany'].disable();
        group.controls['item' + itemsLength + 'Birthday'].disable();
        group.controls['item' + itemsLength + 'personalDoc'].disable();
        group.controls['item' + itemsLength + 'email'].disable();
        group.controls['item' + itemsLength + 'personalType'].disable();
        group.controls['item' + itemsLength + 'Contractor'].enable();


      } else if (this.roleArr.indexOf('item'+itemsLength) === -1 && !this.validatorsStopStatusListRole['item'+itemsLength]) {
        this.validatorsStopStatusListRole['item'+itemsLength] = true;
        group.controls['item' + itemsLength + 'Contractor'].disable();
        group.controls['item' + itemsLength + 'personalType'].enable();
        // personal type
        if (this.statusPersonalType.indexOf('item'+itemsLength) !== -1 ){

          group.controls['item' + itemsLength + 'nameCompany'].validator = Validators.required;

          group.controls['item' + itemsLength + 'Birthday'].disable();
          group.controls['item' + itemsLength + 'personalDoc'].disable();
          group.controls['item' + itemsLength + 'surname'].disable();
          group.controls['item' + itemsLength + 'name'].disable();
          group.controls['item' + itemsLength + 'secondName'].disable();
          group.controls['item' + itemsLength + 'email'].disable();
          group.controls['item' + itemsLength + 'nameCompany'].enable();
        } else {
          group.controls['item' + itemsLength + 'nameCompany'].disable();
          group.controls['item' + itemsLength + 'Birthday'].enable();
          group.controls['item' + itemsLength + 'surname'].enable();
          group.controls['item' + itemsLength + 'name'].enable();
          group.controls['item' + itemsLength + 'secondName'].enable();
          group.controls['item' + itemsLength + 'personalDoc'].enable();

          // sign
          (this.statusSignType.indexOf('item'+itemsLength) !== -1 ) ? group.controls['item' + itemsLength + 'email'].disable() : group.controls['item' + itemsLength + 'email'].enable();
        }
      }

    }
    }));
  }

  /**
   * check if cyrillic if not required
   * @param control
   * @returns {any}
   */
  latinValidation(control: FormControl){
    if (!control || !control.parent) {
      return null;
    }
    if (control.value && control.value.length >= 1){
      if (control.value.match('[а-яёА-ЯЁ -]+') == null){
        return {'latinValidation': true}
      } else {
        if (control.value.match('[а-яёА-ЯЁ -]+')[0] != control.value.match('[а-яёА-ЯЁ -]+').input){
          return {'latinValidation': true}
        }
      }
    }
    return null;
  }

  /**
   * delete user
   * @param e
   */
  deleteUser(e){
    this.participantsform.removeControl(e);
  }

  /**
   * add participants
   * @param e
   */
  addParticipant(e){
    e.preventDefault();

    if (this.participantsform.valid) {

      let itemsLength = 1;
      for (let key in this.participantsform.controls) {
        if (key){
          let thisIdKey = parseInt(key.replace('item', ''));
          if (thisIdKey > itemsLength){
            itemsLength = thisIdKey;
          }
        }
      }
      itemsLength++;

      // add new item to lists that control view
      this.toggleAccordionList['item'+itemsLength] = false;
      for(let key in this.toggleAccordionList) {
        if (key !== 'item'+itemsLength){
          this.toggleAccordionList[key] = true;
        }
      }
      this.validatorsStopStatusListRole['item'+itemsLength] = true;
      this.validatorsStopStatusListPersonalType['item'+itemsLength] =true;
      this.validatorsStopStatusListSignType['item'+itemsLength] = true;
      this.proveStatusList['item'+itemsLength] = false;


      this.addNewFormGroup(itemsLength);

    } else {

      this.getFirstErrorBlock();

      this.showErrors = true;
      setTimeout(() => {
        this.showErrors = false;
      }, 10);

    }

  }
}
