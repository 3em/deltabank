import { Component, OnInit, DoCheck, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-questionary-questions',
  templateUrl: './questionary-questions.component.html',
  styleUrls: ['./questionary-questions.component.scss']
})
export class QuestionaryQuestionsComponent implements OnInit, DoCheck {

  questionaryFormFields: Object = {
    'question1': {
      id: 'question1',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      label: 'Используете ли Вы (в т.ч. частично) заемные средства для первоначального взноса?',
      nameInput: 'questionary_question1',
      value: false
    },
    'question2': {
      id: 'question2',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      label: 'Планируете ли Вы в настоящее время сменить место постоянной работы, уехать в долгосрочную командировку (более 30 дней)?',
      nameInput: 'questionary_question2',
      value: false
    },
    'question3': {
      id: 'question3',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      label: 'Планируете ли Вы в настоящее время уйти в отпуск по беременности и родам (если применимо – для женщин)?',
      nameInput: 'questionary_question3',
      value: false
    },
    'question4': {
      id: 'question4',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      label: 'Являетесь ли Вы родственником лица либо работником предприятия (при наличии у Вас возможности оказывать существенное влияние на решения, принимаемые органами управления такого предприятия напрямую либо через третьих лиц) которому ранее предоставлялся кредит в АО «КБ ДельтаКредит»?',
      nameInput: 'questionary_question4',
      value: false
    },
    'question5': {
      id: 'question5',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      label: 'Являетесь ли Вы публичным должностным лицом или его близким родственником или действуете ли Вы в их интересах?',
      nameInput: 'questionary_question5',
      value: false
    },
    'question6': {
      id: 'question6',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      label: 'Являетесь ли Вы налогоплатильщиком в США?',
      nameInput: 'questionary_question6',
      value: false
    },
    'question7': {
      id: 'question7',
      showErrorStatus: false,
      errorText: '',
      labelText: '',
      label: 'Предоставляете ли Вы согласие Банку на передачу информации в налоговый орган США и (или) налоговым агентам США?',
      nameInput: 'questionary_question7',
      value: false
    }
  };

  questionaryFormFieldsDop: Object = {
    'dopTextInfluence': {
      id: 'dopTextInfluence',
      showErrorStatus: false,
      errorText: '',
      type: 'text',
      labelText: 'ФИО / наименование предприятия',
      placeholder: '',
      nameInput: 'questionary_dopTextInfluence',
      descText: 'Если являетесь, то укажите Фамилию Имя Отчество этого лица / наименование предприятия'
    }
  };

  objectKeys = Object.keys;

  @Input() group: FormGroup;
  @Input() showErrors: boolean;
  @Input() showErrorScrollBlock: string;

  formGroupTitle: string = 'questionaryformQuestions';
  statusDopTextInfluence: boolean = false;

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
    let thisElem: HTMLElement = document.getElementById('questions') as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: questionaryElem.offsetTop + thisElem.offsetTop - 80
    };
    this._scrollToService.scrollTo(config);
  }


  changeCurrentValueQuestion(event, key){
    this.questionaryFormFields[key].value = event;

    if (key === 'question4'){
      this.statusDopTextInfluence = event;
    }
  }

}
