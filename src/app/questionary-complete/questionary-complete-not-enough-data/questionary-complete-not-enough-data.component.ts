import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-questionary-complete-not-enough-data',
  templateUrl: './questionary-complete-not-enough-data.component.html',
  styleUrls: ['./questionary-complete-not-enough-data.component.scss']
})
export class QuestionaryCompleteNotEnoughDataComponent implements OnInit {

  questionaryDopCreditForm: FormGroup;

  questionaryDopCreditFormFields: Object = {
    'dopCredit': {
      id: 'dopCredit',
      showErrorStatus: false,
      errorText: '',
      label: 'Оформить дополнительно кредит наличными на ',
      nameInput: 'dopCredit',
      value: false,
      labelSum: 730000
    }
  };

  constructor(
      private FormBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * init form
   */
  initForm() {

    this.questionaryDopCreditForm = this.FormBuilder.group({
      'dopCredit': new FormControl(''),
    });
  }

  onSubmit(){

  }

  changeCurrentValueDropCredit(event){
    this.questionaryDopCreditFormFields['dopCredit'].value = event;
  }

}
