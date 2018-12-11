import { Component, OnInit, DoCheck, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-questionary-questions-agree',
  templateUrl: 'questionary-questions-agree.component.html',
  styleUrls: ['questionary-questions-agree.component.scss']
})
export class QuestionaryQuestionsAgreeComponent implements OnInit, DoCheck {

  questionaryFormFields: Object = {
    'agreeFull1': {
      id: 'agreeFull1',
      showErrorStatus: false,
      errorText: '',
      label: 'С ',
      nameInput: 'questionary_agreeFull1',
      value: false,
      linkText: 'условиями полного согласия на обработку персональных данных согласен',
      linkUrl: ''
    },
    'agreeFull2': {
      id: 'agreeFull2',
      showErrorStatus: false,
      errorText: '',
      label: 'Подтверждаю ',
      nameInput: 'questionary_agreeFull2',
      value: false,
      linkText: 'согласие на направление запросов в бюро кредитных историй',
      linkUrl: ''
    }
  };

  objectKeys = Object.keys;
  display: boolean = false;

  @Input() group: FormGroup;
  @Input() showErrors: boolean;
  @Input() showErrorScrollBlock: string;

  formGroupTitle: string = 'questionaryformAgree';


  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }
  ngDoCheck(){
    if (this.showErrors){
      this.validateAboutForm();
    }
  }

  /**
   * display data personal popup
   */
  showPersonalDataPopup(e){
    this.display = !e;
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
    let thisElem: HTMLElement = document.getElementById('questions-agree') as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: questionaryElem.offsetTop + thisElem.offsetTop - 80
    };
    this._scrollToService.scrollTo(config);
  }


  changeCurrentValueQuestionAgree(event, key){
    this.questionaryFormFields[key].value = event;
  }

}
