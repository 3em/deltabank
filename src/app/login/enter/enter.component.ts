import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  enterFormFields: Object = {
    'enterPhone': {
      id: 'enterPhone',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'tel',
      labelText: 'Телефон',
      placeholder: '+7 (900) 100-00-00',
      nameInput: 'registration_enterPhone',
      alertHtmlShow: false,
      mask: '+7 (999) 999-99-99'
    },
    'enterPassword': {
      id: 'enterPassword',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'password',
      labelText: 'Пароль',
      placeholder: '',
      nameInput: 'enter_password'
    }
  };

  submitted: boolean;

  enterform: FormGroup;

  globalError: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private _scrollToService: ScrollToService) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * init form
   */
  initForm(){
    this.enterform = this.fb.group({
      'enterPhone': new FormControl('', Validators.required),
      'enterPassword': new FormControl('', Validators.required)
    })
  }

  /**
   * phone validation amount numbers
   * @param control
   * @returns {any}
   */
  phoneValidation(control: FormControl){
    if (!control || !control.parent) {
      return null;
    }
    if (control.value){
      let normalLength = 11;
      let val = control.value.replace(/[a ()+-]/g, '');

      if (val.length !== normalLength)
        return {'phoneMismatch': true}
    }
    return null;
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
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  onSubmit(value: string) {

    if (this.enterform.valid){
      this.submitted = true;
      this.router.navigate(['questionary']);
    } else {
      let arrInvalid = [];
      for (let prop in this.enterform.controls) {
        if (this.enterform.controls[prop].status == 'INVALID' && this.enterFormFields[prop]){
          this.enterFormFields[prop].showErrorStatus = true;
          arrInvalid.push(prop);
        }
      }
      this.triggerScrollTo('block-'+arrInvalid[0]);
      return false;
    }

  }

}
