import { Component, OnInit, Input, Output, EventEmitter, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-popup',
  templateUrl: 'sign-popup.component.html',
  styleUrls: ['sign-popup.component.scss']
})
export class SignPopupComponent implements OnInit {

  @Input() display: boolean;
  @Output() public fn: EventEmitter<any> = new EventEmitter();

  signform: FormGroup;

  signFormFields: Object = {
    'agree': {
      id: 'agree',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      label: 'Я (заемщик) подтверждаю: заверения и данные, указанные мной в заявлении анкеты, являются актуальными',
      nameInput: 'sign_agree',
      value: true
    }
  };

  constructor(
      @Inject(DOCUMENT) private document,
      private fb: FormBuilder,
      private router: Router
  ) { }

  @HostListener('document:keydown', ['$event'])

  /**
   * hide on ESC
   * @param event
   */
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27 && this.display) { // 27===ESC
      this.hideFn();
    }
  }

  ngOnInit() {
    this.initForm();
  }

  /**
   * init form
   */
  initForm(){
    this.signform = this.fb.group({
      'agree': new FormControl(true, Validators.requiredTrue)
    })
  }

  changeCurrentValueAgree(event){
    this.signFormFields['salaryRosbank'].value = event;
  }

  /**
   * hide function and output display
   */
  hideFn(){
    if (this.display){
      this.fn.emit(this.display);
    }
  }

  /**
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  onSubmit(value: string) {
    if (this.signform.valid){
      setTimeout(() => this.hideFn(), 0);
    } else {
      return false;
    }
  }

}
