import { Component, OnInit, Input } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-questionary-complete-success',
  templateUrl: './questionary-complete-success.component.html',
  styleUrls: ['./questionary-complete-success.component.scss']
})
export class QuestionaryCompleteSuccessComponent implements OnInit {

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

  @Input() creditSum: number;

  constructor(
      private FormBuilder: FormBuilder,
      private router: Router
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
    this.router.navigate(['/documents'])
  }

  changeCurrentValueDropCredit(event){
    this.questionaryDopCreditFormFields['dopCredit'].value = event;
  }

  /**
   * format price
   * @param val
   * @returns {string}
   */
  formating(val) {
    return String(val).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
  };

}
