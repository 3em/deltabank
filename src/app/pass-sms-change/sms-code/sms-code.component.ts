import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sms-code',
  templateUrl: './sms-code.component.html',
  styleUrls: ['./sms-code.component.scss']
})
export class SmsCodeComponent implements OnInit {

  @Input() changePassState: boolean;

  @Output() changePassChange = new EventEmitter<boolean>();

  smscodeFormFields: Object = {
    'code': {
      id: 'code',
      showErrorStatus: false,
      errorText: 'Код введен неверно',
      type: 'text',
      labelText: '',
      placeholder: '• • • • • • ',
      nameInput: 'code',
      mask: '999999',
      slotChar: ''
    }
  };

  changeSms: boolean = false;

  submitted: boolean;
  rightNumber: any = '111111';

  timing: number = 30;
  timingWord: string = 'секунд';

  smscodeform: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * init form
   */
  initForm(){
    this.smscodeform = this.fb.group({
      'code': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(this.rightNumber), this.checkSend])),
    },{ validator: (group) => {

      if (group.controls.code.value && group.controls.code.value.length >= 6 && group.controls.code.status === 'INVALID'){
        this.smscodeFormFields['code'].showErrorStatus = true;
      } else if (group.controls.code.value && group.controls.code.value.length < 6 && group.controls.code.status === 'INVALID'){
        this.smscodeFormFields['code'].showErrorStatus = false;
      } else if (!group.controls.code.value){
        this.smscodeFormFields['code'].showErrorStatus = false;
      }

    }})
  }

  checkSend(control: FormControl){
    if (!control || !control.parent) {
      return null;
    }
    if (control.parent.status === 'VALID'){
      let elem: HTMLElement = document.getElementById('submit') as HTMLElement;
      elem.click();
    }

    return null;
  }

  /**
   * change word ends
   * @param number
   * @param one
   * @param two
   * @param five
   * @returns {any}
   */
  declension(number, one, two, five) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
      return five;
    }
    number %= 10;
    if (number == 1) {
      return one;
    }
    if (number >= 2 && number <= 4) {
      return two;
    }
    return five;
  };

  /**
   * send new SMS and show info seconds bar
   * @param e
   */
  sendNewSms(e){
    e.preventDefault();
    this.timing = 30;
    this.smscodeFormFields['code'].showErrorStatus = false;
    this.changeSms = true;
    let interval = setInterval(() => {
      this.timing--;
      let newWord = this.declension(this.timing, 'секунду', 'секунды', 'секунд');
      if (this.timingWord !== newWord){
        this.timingWord = newWord
      }
    }, 1000);
    setTimeout(() => {
      this.changeSms = false;
      clearInterval(interval);
    }, 30000);
  }

  /**
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  onSubmit(value: string) {

    if (this.smscodeform.valid){
      this.submitted = true;

      this.changePassState = true;
      this.changePassChange.emit(this.changePassState);
    }

  }

}
