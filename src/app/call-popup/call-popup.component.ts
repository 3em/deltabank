import { Component, OnInit, Input, Output, EventEmitter, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-call-popup',
  templateUrl: './call-popup.component.html',
  styleUrls: ['./call-popup.component.scss']
})
export class CallPopupComponent implements OnInit {

  @Input() display: boolean;
  @Output() public fn: EventEmitter<any> = new EventEmitter();

  callform: FormGroup;
  callFormFields: Object = {
    'from': {
      id: 'from',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'time',
      labelText: 'Звонить с',
      placeholder: '00:00',
      nameInput: 'call_from'
    },
    'to': {
      id: 'to',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'time',
      labelText: 'до',
      placeholder: '00:00',
      nameInput: 'call_to'
    },
  };
  submittedForm: boolean = false;
  managerStatus: boolean = true;

  constructor(@Inject(DOCUMENT) private document, private fb: FormBuilder) {}

  @HostListener('document:keydown', ['$event'])

  /**
   * hide on ESC
   * @param event
   */
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27 && this.display) {
      this.hideFn();
    }
  }

  /**
   * close popup on overlay click
   * @param e
   */
  hideOverlay(e){
    if (e.target.className == 'b-popup__overlay'){
      this.hideFn();
    }
  }

  /**
   * hide function and output display
   */
  hideFn(){

    if (this.display){
      this.submittedForm = false;
      this.display = !this.display;

      this.fn.emit(this.display);
    }
  }

  ngOnInit() {
    this.initForm();
  }

  /**
   * init form
   */
  initForm(){
    this.callform = this.fb.group({
      'from': new FormControl('', Validators.required),
      'to': new FormControl('', Validators.required)
    })
  }

  /**
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  onSubmit(value: string) {

    if (this.callform.valid){

      this.submittedForm = true;
      setTimeout(() => this.hideFn(), 3000);

    } else {
      for (let prop in this.callform.controls) {
        if (this.callform.controls[prop].status == 'INVALID' && this.callFormFields[prop]){
          this.callFormFields[prop].showErrorStatus = true;
        }
      }
      return false;
    }
  }

}
