import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-property-secondary-edit',
  templateUrl: './property-secondary-edit.component.html',
  styleUrls: ['./property-secondary-edit.component.scss']
})
export class PropertySecondaryEditComponent implements OnInit {

  submittedForm: boolean = false;

  propertyform: FormGroup;

  @Output() changeSubmittedStatus = new EventEmitter<boolean>();
  @Output() saveAddress = new EventEmitter<string>();

  propertyFormFields: Object = {
    'address': {
      id: 'address',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: '',
      placeholder: 'Введите адрес недвижимости',
      nameInput: 'property_address'
    },
  };

  constructor(
      private FormBuilder: FormBuilder,
      private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  changeCurrentValue(event){
    this.saveAddress.emit(event);
  }

  /**
   * init form
   */
  initForm() {
    this.propertyform = this.FormBuilder.group({
      'address': new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    if (this.propertyform.valid){

      this.submittedForm = true;
      this.changeSubmittedStatus.emit(this.submittedForm);

    } else {

      for (let prop in this.propertyform.controls) {
        if (this.propertyform.controls[prop].status == 'INVALID' && this.propertyFormFields[prop]){
          this.propertyFormFields[prop].showErrorStatus = true;
        }
      }
      return false;
    }
  }

}
