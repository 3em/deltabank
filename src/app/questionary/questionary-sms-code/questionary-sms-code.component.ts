import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-questionary-sms-code',
  templateUrl: './questionary-sms-code.component.html',
  styleUrls: ['./questionary-sms-code.component.scss']
})
export class QuestionarySmsCodeComponent implements OnInit {

  @Input() group: FormGroup;

  @Input() showNextStep: boolean;

  @Output() changeNextState = new EventEmitter<boolean>();

  questionarySmsForm: Object = {
    'code': {
      id: 'code',
      showErrorStatus: false,
      errorText: 'Код введен неверно',
      type: 'text',
      labelText: '',
      placeholder: '• • • • • • ',
      nameInput: 'questionary_code'
    }
  };

  changeSms: boolean = false;

  submitted: boolean;

  timing: number = 30;
  timingWord: string = 'секунд';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * init form
   */
  initForm(){
    this.group = this.fb.group({
      'code': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), this.checkSend])),
    });
  }

  checkSend(control: FormControl){
    if (!control || !control.parent) {
      return null;
    }
    if (control.parent.status === 'VALID'){
      let elem: HTMLElement = document.getElementById('sms-submit') as HTMLElement;
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
    if (e){
      e.preventDefault();
    }
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

    if (this.group.valid){
      this.submitted = true;
      this.showNextStep = true;
      this.changeNextState.emit(this.showNextStep);
    }

  }

}
