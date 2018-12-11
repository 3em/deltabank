import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  registrationFormFields: Object = {
    'surname': {
      id: 'surname',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Фамилия',
      placeholder: 'Иванов',
      nameInput: 'registration_surname',
      cyrillicValidation: true
    },
    'name': {
      id: 'name',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Имя',
      placeholder: 'Иван',
      nameInput: 'registration_name',
      cyrillicValidation: true
    },
    'secondName': {
      id: 'secondName',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'Отчество',
      placeholder: 'Иванович',
      nameInput: 'registration_secondName',
    },
    'email': {
      id: 'email',
      showErrorStatus: false,
      errorText: 'Почта в формате: vashapochta@gmail.com',
      type: 'email',
      labelText: 'Почта',
      placeholder: 'vasha_pochta@mail.ru',
      nameInput: 'registration_email'
    },
    'phone': {
      id: 'phone',
      showErrorStatus: false,
      type: 'tel',
      errorText: 'Обязательно для заполнения',
      labelText: 'Телефон',
      placeholder: '+7 (000) 000-00-00',
      nameInput: 'registration_phone',
      alertHtmlShow: false,
      mask: '+7 (999) 999-99-99?9'
    },
    'password': {
      id: 'password',
      showErrorStatus: false,
      errorText: 'Длина не менее 8 символов, пароль должен включать заглавную букву, цифру и буквы латинского алфавита',
      type: 'password',
      labelText: 'Пароль',
      placeholder: '',
      nameInput: 'registration_password',
      descText: 'Длина не менее 8 символов, пароль должен включать заглавную букву, цифру и буквы латинского алфавита'
    },
    'passwordRepeat': {
      id: 'passwordRepeat',
      showErrorStatus: false,
      errorText: 'Пароли не совпадают',
      type: 'password',
      labelText: 'Подтвердите пароль',
      placeholder: '',
      nameInput: 'registration_passwordRepeat'
    },
    'regions': {
      id: 'regions',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Регион недвижимости',
      placeholder: 'Москва'
    },
    'agree': {
      id: 'agree',
      showErrorStatus: false,
      errorText: '',
      label: 'Даю',
      nameInput: 'registration_agree',
      value: false,
      linkText: 'согласие на получение информации о продуктах и услугах банка'
    }
  };

  display: boolean = false;

  submitted: boolean;

  registrationform: FormGroup;

  regions: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];

  constructor(private fb: FormBuilder, private _scrollToService: ScrollToService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * display data personal popup
   */
  showPersonalDataPopup(e){
    this.display = !e;
  }

  /**
   * init form
   */
  initForm(){
    this.registrationform = this.fb.group({
      'surname': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[а-яёА-ЯЁ -]+')])),
      'name': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[а-яёА-ЯЁ -]+')])),
      'secondName': new FormControl('', this.latinValidation),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
      'phone': new FormControl('', Validators.compose([Validators.required, this.phoneValidation])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')])),
      'passwordRepeat': new FormControl('', Validators.compose([Validators.required, this.matchPasswords])),
      'regions': new FormControl('', Validators.required),
      'agree': new FormControl('', Validators.requiredTrue)
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
   * validation for repeat password
   * @param control
   * @returns {any}
   */
  matchPasswords(control: FormControl){
    if (!control || !control.parent) {
      return null;
    }
    if (control.value !== control.parent.get('password').value) {
      return {'passwordMismatch': true}
    }
    return null;
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
    if (this.registrationform.valid){
      this.submitted = true;
      this.router.navigate(['questionary']);
    } else {
      let arrInvalid = [];
      for (let prop in this.registrationform.controls) {
        if (this.registrationform.controls[prop].status == 'INVALID' && this.registrationFormFields[prop]){
          this.registrationFormFields[prop].showErrorStatus = true;
          arrInvalid.push(prop);
        }
      }
      this.triggerScrollTo('block-'+arrInvalid[0]);
      return false;
    }

  }
}
