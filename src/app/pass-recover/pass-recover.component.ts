import { Component, OnInit, Input, HostListener } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pass-recover',
  templateUrl: './pass-recover.component.html',
  styleUrls: ['./pass-recover.component.scss']
})
export class PassRecoverComponent implements OnInit {

  headerStatusFull: boolean = false;

  windowWidth: number = window.innerWidth;

  passrecoverFromFields: Object = {
    'phone': {
      id: 'phone',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'tel',
      labelText: '',
      placeholder: '+7 (900) 100-00-00',
      nameInput: 'enter_phone',
      mask: '+7 (999) 999-99-99'
    }
  };

  submitted: boolean;

  passrecoverform: FormGroup;

  /**
   * set width for blur bg
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  /**
   * init form
   */
  initForm(){
    this.passrecoverform = this.fb.group({
      'phone': new FormControl('', Validators.compose([Validators.required, this.phoneValidation])),
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
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  onSubmit(value: string) {

    if (this.passrecoverform.valid){
      this.submitted = true;
      this.sendToRegistration();
    } else {

      for (let prop in this.passrecoverform.controls) {
        if (this.passrecoverform.controls[prop].status == 'INVALID' && this.passrecoverFromFields[prop]){
          this.passrecoverFromFields[prop].showErrorStatus = true;
        }
      }
      return false;
    }

  }

  sendToRegistration(){
    this.router.navigate(['sms-code'])
  }

}
