import { Component, OnInit, DoCheck, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-questionary-costs',
  templateUrl: './questionary-costs.component.html',
  styleUrls: ['./questionary-costs.component.scss']
})
export class QuestionaryCostsComponent implements OnInit, DoCheck {

  questionaryFormFields: Object = {
    'creditsPayment': {
      id: 'creditsPayment',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Платежи по кредитам',
      placeholder: '0 руб.',
      nameInput: 'questionary_creditsPayment'
    },
    'alimony': {
      id: 'alimony',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'Сумма алиментов в месяц',
      placeholder: '0 руб.',
      nameInput: 'questionary_alimony'
    }
  };

  @Input() group: FormGroup;
  @Input() showErrors: boolean;
  @Input() showErrorScrollBlock: string;

  formGroupTitle: string = 'questionaryformCosts';

  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }
  ngDoCheck(){
    if (this.showErrors){
      this.validateAboutForm();
    }
  }

  /**
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  validateAboutForm() {

    if (!this.group.valid){

      let arrInvalid = [];
      for (let prop in this.group.controls) {
        if (this.group.controls[prop].status == 'INVALID' && this.questionaryFormFields[prop]){
          this.questionaryFormFields[prop].showErrorStatus = true;
          arrInvalid.push(prop);
        }
      }
      if (this.formGroupTitle === this.showErrorScrollBlock){
        this.triggerScrollTo('block-'+arrInvalid[0]);
      }
      return false;
    }

  }

  /**
   * scroll to elem
   * @param id
   */
  public triggerScrollTo(id) {
    let questionaryElem: HTMLElement = document.getElementById('questionary') as HTMLElement;
    let thisElem: HTMLElement = document.getElementById('costs') as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: questionaryElem.offsetTop + thisElem.offsetTop - 80
    };
    this._scrollToService.scrollTo(config);
  }

}
