import { Component, OnInit, Inject } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { WINDOW } from "../../window.service";
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-valuation-form',
  templateUrl: './valuation-form.component.html',
  styleUrls: ['./valuation-form.component.scss']
})
export class ValuationFormComponent implements OnInit {
  valuationform: FormGroup;
  showEvaluatingCompany: boolean = false;
  showReportUpload: boolean = false;
  fileUploadText: string;
  changeChange: boolean = false;

  valuationFormFields: Object = {
    'name': {
      id: 'name',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      type: 'text',
      labelText: 'ФИО',
      placeholder: '',
      nameInput: 'valuation_name',
      cyrillicValidation: true
    },
    'phone': {
      id: 'phone',
      showErrorStatus: false,
      type: 'tel',
      errorText: 'Обязательно для заполнения',
      labelText: 'Телефон',
      placeholder: '+7 (000) 000-00-00',
      nameInput: 'valuation_phone',
      alertHtmlShow: false,
      mask: '+7 (999) 999-99-99'
    },
    'statusEvaluatingCompany':{
      labelText: 'У вас есть предпочтит. оценочная компания?',
      currentValue: 'no',
      nameInput: 'valuation_statusEvaluatingCompany',
      inputs: {
        0: {
          label: 'Да',
          value: 'yes',
          id: 'statusEvaluatingCompany-yes'
        },
        1: {
          label: 'Нет',
          value: 'no',
          id: 'statusEvaluatingCompany-no'
        }
      }
    },
    'evaluatingCompany': {
      id: 'evaluatingCompany',
      showErrorStatus: false,
      errorText: '',
      labelText: 'Оценочная компания',
      placeholder: '',
      nameInput: 'valuation_evaluatingCompany',
      values: [
        {name: 'ООО «Компания»', value: 'company-1'},
        {name: 'ООО «Компания» 2', value: 'company-2'},
        {name: 'ООО «Компания» 3', value: 'company-3'}
      ],
      selectedItem: '',
      panelClass: 'dropdown-body-smaller'
    },
    'statusReport':{
      labelText: 'У вас есть отчет с датой отсчета менее 6 мес.',
      currentValue: 'no',
      nameInput: 'valuation_statusReport',
      inputs: {
        0: {
          label: 'Да',
          value: 'yes',
          id: 'statusReport-yes'
        },
        1: {
          label: 'Нет',
          value: 'no',
          id: 'statusReport-no'
        }
      }
    },
  };

  constructor(
      private _scrollToService: ScrollToService,
      @Inject(WINDOW) private window: Window,
      private FormBuilder: FormBuilder,
      private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.resizeWindowChanges();
  }

  /**
   * init form
   */
  initForm() {

    this.valuationform = this.FormBuilder.group({
      'name': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[а-яёА-ЯЁ -]+')])),
      'phone': new FormControl('', Validators.required),
      'valuation_statusEvaluatingCompany': new FormControl(''),
      'evaluatingCompany': new FormControl(''),
      'valuation_statusReport': new FormControl(''),
    });
  }

  /**
   * onresize
   */
  onResize(event){
    this.resizeWindowChanges();
  }

  resizeWindowChanges(){
    (window.innerWidth < 768) ? this.fileUploadText = 'Загрузить отчет' : this.fileUploadText = 'Загрузить отчет об оценке';
  }

  /**
   * scroll to elem
   * @param id
   */
  public triggerScrollTo(id) {
    let caluationForm: HTMLElement = document.getElementById('valuation-form') as HTMLElement;
    let wrapper: HTMLElement = document.getElementById('wrapper') as HTMLElement;

    const config: ScrollToConfigOptions = {
      target: id,
      offset: caluationForm.offsetTop+wrapper.offsetTop
    };
    this._scrollToService.scrollTo(config);
  }

  /**
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  onSubmit(value: string) {

    if (this.valuationform.valid){
      this.router.navigate(['valuation-complete']);
    } else {
      let arrInvalid = [];
      for (let prop in this.valuationform.controls) {
        if (this.valuationform.controls[prop].status == 'INVALID' && this.valuationFormFields[prop]){
          this.valuationFormFields[prop].showErrorStatus = true;
          arrInvalid.push(prop);
        }
      }
      this.triggerScrollTo('block-'+arrInvalid[0]);
      return false;
    }

  }


  changeCurrentValueStatusEvaluatingCompany(event){
    this.valuationFormFields['statusEvaluatingCompany'].currentValue = event;
    if (event === 'yes') {
      this.showEvaluatingCompany = true;
      this.changeChange = true;
    } else {
      this.showEvaluatingCompany = false;
      this.changeChange = false;
    }
  }
  changeCurrentValueEvaluatingCompany(event){
    this.valuationFormFields['evaluatingCompany'].selectedItem = event;
  }
  changeCurrentValueStatusReport(event){
    this.valuationFormFields['statusReport'].currentValue = event;
    (event === 'yes') ? this.showReportUpload = true : this.showReportUpload = false;
  }

}
