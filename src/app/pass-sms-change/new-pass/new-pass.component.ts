import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.scss']
})
export class NewPassComponent implements OnInit {

  newpassFormFields: Object = {
    'password': {
      id: 'password',
      showErrorStatus: false,
      errorText: 'Должен включать минимум 8 символов, одна заглавная буква, цифра и буквы латинского алфавита',
      type: 'password',
      labelText: 'Пароль',
      placeholder: '',
      nameInput: 'registration_password',
      descText: 'Должен включать минимум 8 символов, одна заглавная буква, цифра и буквы латинского алфавита'
    },
    'passwordRepeat': {
      id: 'passwordRepeat',
      showErrorStatus: false,
      errorText: 'Пароли не совпадают',
      type: 'password',
      labelText: 'Подтвердите пароль',
      placeholder: '',
      nameInput: 'registration_passwordRepeat'
    }
  };

  submitted: boolean;

  newpassform: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  /**
   * init form
   */
  initForm(){
    this.newpassform = this.fb.group({
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')])),
      'passwordRepeat': new FormControl('', Validators.compose([Validators.required, this.matchPasswords]))
    })
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
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  onSubmit(value: string) {

    if (this.newpassform.valid){
      this.submitted = true;
      this.router.navigate(['questionary']);
    } else {
      for (let prop in this.newpassform.controls) {
        if (this.newpassform.controls[prop].status == 'INVALID' && this.newpassFormFields[prop]){
          this.newpassFormFields[prop].showErrorStatus = true;
        }
      }
      return false;
    }

  }

}
