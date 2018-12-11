import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../window.service";
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.scss']
})
export class QuestionaryComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  activeIndex: number = 0;

  fixNavStatus: boolean = false;
  showUnitCodeStatus: boolean = true;
  questionaryform: FormGroup;
  showStepNumber: number = 0;
  showErrors: boolean;
  showErrorScrollBlock: any;
  isAnotherJob: boolean = false;
  isOfficialJob: boolean = false;
  bgGrey: boolean = false;
  showCalcBottom: boolean = true;
  familyStatus: boolean = false;
  sexStatus: boolean = true;
  plusOneStep: number = 0;
  changeNameStatus: boolean = false;
  availableRegistration: boolean = true;
  availableCurrentAddress: boolean = false;
  showMoreCompInfoValidation: boolean = false;
  showMoreCompInfoValidationDop: boolean = false;
  isSpouseIncome: boolean = false;

  statusChangeValidate_Work: boolean = true;
  statusChangeValidate_About: boolean = true;
  statusChangeValidate_Spouse: boolean = true;
  statusChangeValidate_SpouseIncome: boolean = true;
  statusChangeValidate_Income: boolean = true;
  statusChangeValidate_Agree: boolean = true;
  statusChangeValidate_Email: boolean = true;
  statusChangeValidate_Registration: boolean = true;
  statusChangeValidate_Address: boolean = true;
  statusChangeValidate_CompInfo: boolean = true;
  statusChangeValidate_CompInfoDop: boolean = true;
  statusChangeValidate_AnotherJob: boolean = true;

  constructor(
      private _scrollToService: ScrollToService,
      @Inject(DOCUMENT) private document: Document,
      @Inject(WINDOW) private window: Window,
      private FormBuilder: FormBuilder
  ) {}

  navItems = [
    {
      label: 'Обо мне',
      hash: 'about',
      command: (event: any) => {
        this.clickNavState(event.item.hash, 0);
      }},{
      label: 'Работа',
      hash: 'work',
      command: (event: any) => {
        this.clickNavState(event.item.hash, 1);
      }},{
      label: 'Доходы',
      hash: 'income',
      command: (event: any) => {
        this.clickNavState(event.item.hash, 2);
      }},{
      label: 'Расходы',
      hash: 'costs',
      command: (event: any) => {
        this.clickNavState(event.item.hash, 3);
      }},{
      label: 'Вопросы',
      hash: 'questions',
      command: (event: any) => {
        this.clickNavState(event.item.hash, 4);
      }},{
      label: 'Выбор ипотеки',
      hash: 'mortgage',
      command: (event: any) => {
        this.clickNavState(event.item.hash, 5);
      }},{
      label: 'Расчеты',
      hash: 'savedCalc',
      command: (event: any) => {
        this.clickNavState(event.item.hash, 6);
      }}
  ];

  navItemsBig = [];

  @HostListener('window:scroll', [])

  onWindowScroll(event){
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    let questionaryElem: HTMLElement = this.document.getElementById('questionary') as HTMLElement;
    let mortgageBlock: HTMLElement = this.document.getElementById('mortgage') as HTMLElement;

    if (offset >= questionaryElem.offsetTop && !this.fixNavStatus){
      this.fixNavStatus = true;
    } else if (offset < questionaryElem.offsetTop && this.fixNavStatus){
      this.fixNavStatus = false;
    }

    if (mortgageBlock && offset >= mortgageBlock.offsetTop + questionaryElem.offsetTop - 83 && !this.bgGrey){
      this.bgGrey = true;
    } else if (mortgageBlock && offset < mortgageBlock.offsetTop + questionaryElem.offsetTop - 83 && this.bgGrey){
      this.bgGrey = false;
    }

    this.scrollNavActivation(offset, questionaryElem.offsetTop);
  }

  scrollNavActivation(offset, offsetParentBlock){
    for (let prop in this.navItems) {
      let hash = this.navItems[prop].hash;
      let thisHashBlock: HTMLElement = this.document.getElementById(hash) as HTMLElement;

      if (thisHashBlock && offset >= thisHashBlock.offsetTop + offsetParentBlock && offset < thisHashBlock.offsetHeight + thisHashBlock.offsetTop + offsetParentBlock && this.activeIndex != parseInt(prop)){
        this.activeIndex = parseInt(prop);
      }

    }
  }

  changeNextStatePrev(event){
    this.showStepNumber = event;
  }

  familyStatusGlobal(event){
    if (event === 'married') {
      this.familyStatus = true;
      this.plusOneStep = 1;
    } else {
      this.familyStatus = false;
      this.plusOneStep = 0;
    }
  }
  changeRegistration(event){
    this.availableRegistration = event;
  }
  changeCurrentAddress(event){
    this.availableCurrentAddress = event;
  }
  changeNameGloabal(event){
    this.changeNameStatus = event;
  }
  showUnitCodeGlobal(event){
    this.showUnitCodeStatus = event;
  }
  sexStatusGlobal(event){
    (event === 'male') ? this.sexStatus = true : this.sexStatus = false;
    this.initNavItems();
  }

  changeIsAnotherJob(event){
    this.isAnotherJob = event;
  }

  changeSpouseIncome(event){
    this.isSpouseIncome = event;
  }

  showMoreCompInfo(event){
    this.showMoreCompInfoValidation = event;
  }
  showMoreCompInfoDop(event){
    this.showMoreCompInfoValidationDop = event;
  }

  changeIsOfficialJob(event){
    this.isOfficialJob = event;
  }

  ngOnInit() {
    this.initForm();
    this.initNavItems();
  }

  initNavItems(){
    this.navItemsBig = [
      {
        label: 'Обо мне',
        hash: 'about',
        command: (event: any) => {
          this.clickNavState(event.item.hash, 0);
        }},{
        label: 'Работа',
        hash: 'work',
        command: (event: any) => {
          this.clickNavState(event.item.hash, 1);
        }},{
        label: 'Доходы',
        hash: 'income',
        command: (event: any) => {
          this.clickNavState(event.item.hash, 2);
        }},{
        label: 'Расходы',
        hash: 'costs',
        command: (event: any) => {
          this.clickNavState(event.item.hash, 3);
        }},{
        label: 'Вопросы',
        hash: 'questions',
        command: (event: any) => {
          this.clickNavState(event.item.hash, 4);
        }},{
        label: (!this.sexStatus) ? 'Супруг' : 'Супруга',
        hash: 'spouse',
        command: (event: any) => {
          this.clickNavState(event.item.hash, 5);
        }},{
        label: 'Выбор ипотеки',
        hash: 'mortgage',
        command: (event: any) => {
          this.clickNavState(event.item.hash, 6);
        }},{
        label: 'Расчеты',
        hash: 'savedCalc',
        command: (event: any) => {
          this.clickNavState(event.item.hash, 7);
        }}
    ]
  }

  /**
   * click nav item
   * @param hash
   */
  clickNavState(hash, number){
    if (this.showStepNumber >= number){
      this.activeIndex = number;
      this.scrollToHash(hash);
    } else {
      this.activeIndex = this.showStepNumber;
    }
  }

  /**
   * scroll to hash nav item
   * @param hash
   */
  scrollToHash(hash){
    let questionaryElem: HTMLElement = this.document.getElementById('questionary') as HTMLElement;
    this.triggerScrollTo(hash, questionaryElem.offsetTop);
  }

  /**
   * scroll to elem
   * @param id
   */
  public triggerScrollTo(id, offset) {

    const config: ScrollToConfigOptions = {
      target: id,
      offset: offset
    };
    this._scrollToService.scrollTo(config);
  }

  /**
   * init form
   */
  initForm(){

    this.questionaryform = this.FormBuilder.group({
      questionaryformAbout: this.FormBuilder.group({
        'surname': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[а-яёА-ЯЁ -]+')])),
        'name': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[а-яёА-ЯЁ -]+')])),
        'secondName': new FormControl('', this.latinValidation),
        'email': new FormControl(''),
        'questionary_changeName': new FormControl(''),
        'changeNameYear': new FormControl('', Validators.required),
        'prevSurname': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[а-яёА-ЯЁ -]+')])),
        'prevName': new FormControl('', this.latinValidation),
        'prevSecondName': new FormControl('', this.latinValidation),
        'birthday': new FormControl('', Validators.required),
        'familystatus': new FormControl('', Validators.required),
        'questionary_sex': new FormControl(''),
        'education': new FormControl('', Validators.required),
        'personalDoc': new FormControl({name: 'Паспорт гражданина РФ', value: 'passport'}, Validators.required),
        'citizenship': new FormControl(''),
        'personalDocNumber': new FormControl('', Validators.required),
        'docsIssueDate': new FormControl('', Validators.required),
        'unitCode': new FormControl(''),
        'passportIssuedBy': new FormControl('', Validators.required),
        'burnPlace': new FormControl('', Validators.required),
        'registrationAddress': new FormControl('', Validators.required),
        'personalDocNumberPrev': new FormControl(''),
        'currentAddress': new FormControl(''),
        'docsIssueDatePrev': new FormControl(''),
        'unitCodePrev': new FormControl(''),
        'regions': new FormControl('', Validators.required),
        'insurance': new FormControl(''),
        'agree': new FormControl(''),
        'questionary_registrationEquals': new FormControl(''),
        'questionary_registration': new FormControl(''),
      },{ validator: (group) => {

        if (!this.availableRegistration && this.statusChangeValidate_Registration){
          this.statusChangeValidate_Registration = false;
          group.controls.registrationAddress.disable();
          group.controls.currentAddress.disable();
        } else if (this.availableRegistration && !this.statusChangeValidate_Registration){
          this.statusChangeValidate_Registration = true;
          group.controls.registrationAddress.enable();

          if (this.availableCurrentAddress && this.statusChangeValidate_Address){
            this.statusChangeValidate_Address = false;
            group.controls.currentAddress.validator = Validators.required;
            group.controls.currentAddress.enable();
          } else if (!this.availableCurrentAddress && !this.statusChangeValidate_Address){
            this.statusChangeValidate_Address = true;
            group.controls.currentAddress.disable();
          }
        }

        if (this.availableCurrentAddress && this.statusChangeValidate_Address){
          this.statusChangeValidate_Address = false;
          group.controls.currentAddress.validator = Validators.required;
          group.controls.currentAddress.enable();
        } else if (!this.availableCurrentAddress && !this.statusChangeValidate_Address){
          this.statusChangeValidate_Address = true;
          group.controls.currentAddress.disable();
        }

        if (group.controls.email.value && !this.statusChangeValidate_Email){
          this.statusChangeValidate_Email = true;
          group.controls.email.validator = Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}');
        } else if ( (!group.controls.email.value || group.controls.email.value.length < 1)  && this.statusChangeValidate_Email) {
          this.statusChangeValidate_Email = false;
          group.controls.email.validator = null;
        }

        if (this.changeNameStatus && !this.statusChangeValidate_About) {
          this.statusChangeValidate_About = !this.statusChangeValidate_About;

          group.controls.prevSurname.enable();
          group.controls.prevName.enable();
          group.controls.prevSecondName.enable();
          group.controls.changeNameYear.enable();

        } else if (!this.changeNameStatus && this.statusChangeValidate_About) {
          this.statusChangeValidate_About = !this.statusChangeValidate_About;

          group.controls.prevSurname.disable();
          group.controls.prevName.disable();
          group.controls.prevSecondName.disable();
          group.controls.changeNameYear.disable();
        }

        if (this.showUnitCodeStatus){
          group.controls.unitCode.validator = Validators.required;
          group.controls.citizenship.validator = null;
        } else {
          group.controls.unitCode.validator = null;
          group.controls.citizenship.validator = Validators.required;
        }

      }}),
      questionaryformWork: this.FormBuilder.group({
        'officialWork': new FormControl(''),
        'companyName': new FormControl('', Validators.required),
        'INN': new FormControl('', Validators.required),
        'companyPhone': new FormControl('', Validators.required),
        'companyAddress': new FormControl('', Validators.required),
        'companySite': new FormControl('', this.urlValidation),
        'employment': new FormControl('', Validators.required),
        'shareBusiness': new FormControl(''),
        'schedule': new FormControl('', Validators.required),
        'workNature': new FormControl('', Validators.required),
        'companyDate': new FormControl('', Validators.required),
        'taxation': new FormControl('', Validators.required),
        'position': new FormControl('', Validators.required),
        'isLawyer': new FormControl(''),
        'jobLadder': new FormControl('', Validators.required),
        'companyActivity': new FormControl('', Validators.required),
        'activityInCompany': new FormControl('', Validators.required),
        'employmentDate': new FormControl(''),
        'experience': new FormControl('', Validators.required),
        'questionary_anotherJob': new FormControl(''),

        'companyName_dop': new FormControl(''),
        'INN_dop': new FormControl(''),
        'companyPhone_dop': new FormControl(''),
        'companyAddress_dop': new FormControl(''),
        'companySite_dop': new FormControl(''),
        'employment_dop': new FormControl(''),
        'shareBusiness_dop': new FormControl(''),
        'schedule_dop': new FormControl(''),
        'workNature_dop': new FormControl(''),
        'companyDate_dop': new FormControl(''),
        'taxation_dop': new FormControl(''),
        'position_dop': new FormControl(''),
        'isLawyer_dop': new FormControl(''),
        'jobLadder_dop': new FormControl(''),
        'companyActivity_dop': new FormControl(''),
        'activityInCompany_dop': new FormControl(''),
        'employmentDate_dop': new FormControl(''),
        'experience_dop': new FormControl(''),
      },{ validator: (group) => {

        if (this.showStepNumber >= 1 && this.showMoreCompInfoValidation && this.statusChangeValidate_CompInfo){
          this.statusChangeValidate_CompInfo = false;

          group.controls.companyDate.enable();
          group.controls.taxation.enable();
        } else if (this.showStepNumber >= 1 && !this.showMoreCompInfoValidation && !this.statusChangeValidate_CompInfo){
          this.statusChangeValidate_CompInfo = true;

          group.controls.companyDate.disable();
          group.controls.taxation.disable();
        }

        if (this.showStepNumber >= 1 && this.showMoreCompInfoValidationDop && this.statusChangeValidate_CompInfoDop){
          this.statusChangeValidate_CompInfoDop = false;

          group.controls.companyDate_dop.validator = Validators.required;
          group.controls.taxation_dop.validator = Validators.required;
          group.controls.companyDate_dop.enable();
          group.controls.taxation_dop.enable();
        } else if (this.showStepNumber >= 1 && !this.showMoreCompInfoValidationDop && !this.statusChangeValidate_CompInfoDop){
          this.statusChangeValidate_CompInfoDop = true;

          group.controls.companyDate_dop.disable();
          group.controls.taxation_dop.disable();
        }

        if (this.showStepNumber >= 1 && this.isAnotherJob && this.statusChangeValidate_AnotherJob){
          this.statusChangeValidate_AnotherJob = false;

          group.controls.INN_dop.validator = Validators.required;
          group.controls.companyName_dop.validator = Validators.required;
          group.controls.companyPhone_dop.validator = Validators.required;
          group.controls.companyAddress_dop.validator = Validators.required;
          group.controls.employment_dop.validator = Validators.required;
          group.controls.schedule_dop.validator = Validators.required;
          group.controls.workNature_dop.validator = Validators.required;
          group.controls.position_dop.validator = Validators.required;
          group.controls.jobLadder_dop.validator = Validators.required;
          group.controls.companyActivity_dop.validator = Validators.required;
          group.controls.activityInCompany_dop.validator = Validators.required;
          group.controls.experience_dop.validator = Validators.required;

          group.controls.INN_dop.enable();
          group.controls.companyName_dop.enable();
          group.controls.companyPhone_dop.enable();
          group.controls.companyAddress_dop.enable();
          group.controls.employment_dop.enable();
          group.controls.schedule_dop.enable();
          group.controls.workNature_dop.enable();
          group.controls.position_dop.enable();
          group.controls.jobLadder_dop.enable();
          group.controls.companyActivity_dop.enable();
          group.controls.activityInCompany_dop.enable();
          group.controls.experience_dop.enable();



        } else if (this.showStepNumber >= 1 && !this.isAnotherJob && !this.statusChangeValidate_AnotherJob){
          this.statusChangeValidate_AnotherJob = true;

          group.controls.INN_dop.disable();
          group.controls.companyName_dop.disable();
          group.controls.companyPhone_dop.disable();
          group.controls.companyAddress_dop.disable();
          group.controls.employment_dop.disable();
          group.controls.schedule_dop.disable();
          group.controls.workNature_dop.disable();
          group.controls.position_dop.disable();
          group.controls.jobLadder_dop.disable();
          group.controls.companyActivity_dop.disable();
          group.controls.activityInCompany_dop.disable();
          group.controls.experience_dop.disable();
          group.controls.companyDate_dop.disable();
          group.controls.taxation_dop.disable();
        }


        if (this.showStepNumber >= 1 && !this.isOfficialJob && this.statusChangeValidate_Work) {
          this.statusChangeValidate_Work = !this.statusChangeValidate_Work;

          group.controls.INN.enable();
          group.controls.companyName.enable();
          group.controls.companyPhone.enable();
          group.controls.companyAddress.enable();
          group.controls.employment.enable();
          group.controls.schedule.enable();
          group.controls.workNature.enable();
          group.controls.position.enable();
          group.controls.jobLadder.enable();
          group.controls.companyActivity.enable();
          group.controls.activityInCompany.enable();
          group.controls.experience.enable();

          if (this.showMoreCompInfoValidation && this.statusChangeValidate_CompInfo){
            this.statusChangeValidate_CompInfo = false;

            group.controls.companyDate.enable();
            group.controls.taxation.enable();
          } else if (!this.showMoreCompInfoValidation && !this.statusChangeValidate_CompInfo){
            this.statusChangeValidate_CompInfo = true;

            group.controls.companyDate.disable();
            group.controls.taxation.disable();
          }

        } else if ( (this.showStepNumber >= 1 && this.isOfficialJob && !this.statusChangeValidate_Work) || (this.showStepNumber < 1 && !this.statusChangeValidate_Work) ) {
          this.statusChangeValidate_Work = !this.statusChangeValidate_Work;

          group.controls.INN.disable();
          group.controls.companyName.disable();
          group.controls.companyPhone.disable();
          group.controls.companyAddress.disable();
          group.controls.employment.disable();
          group.controls.schedule.disable();
          group.controls.workNature.disable();
          group.controls.companyDate.disable();
          group.controls.taxation.disable();
          group.controls.position.disable();
          group.controls.jobLadder.disable();
          group.controls.companyActivity.disable();
          group.controls.activityInCompany.disable();
          group.controls.experience.disable();
        }


      }}),
      questionaryformIncome: this.FormBuilder.group({
        'salary': new FormControl(''),
        'docSalary': new FormControl(''),
        'otherDocSalary': new FormControl(''),
        'salaryDop': new FormControl(''),
        'docSalaryDop': new FormControl(''),
        'otherDocSalaryDop': new FormControl(''),
        'rentIncome': new FormControl(''),
        'pension': new FormControl('')
      },{ validator: (group) => {

        if (this.showStepNumber >= 2 && this.statusChangeValidate_Income){
          this.statusChangeValidate_Income = false;

          group.controls.salary.validator = Validators.required;
        }
      }}),
      questionaryformCosts: this.FormBuilder.group({
        'creditsPayment': new FormControl(''),
        'alimony': new FormControl('')
      }),
      questionaryformQuestions: this.FormBuilder.group({
        'question1': new FormControl(''),
        'question2': new FormControl(''),
        'question3': new FormControl(''),
        'question4': new FormControl(''),
        'question5': new FormControl(''),
        'question6': new FormControl(''),
        'question7': new FormControl(''),
        'dopTextInfluence': new FormControl('')
      }),
      questionaryformSpouse: this.FormBuilder.group({
        'spousePhone': new FormControl(''),
        'spouseEmail': new FormControl(''),
        'questionary_statusSpouseIncome': new FormControl(''),
        'spouseIncome': new FormControl(''),
        'propertyOwner': new FormControl(''),
        'questionary_spouseLoanRespons': new FormControl(''),
      },{ validator: (group) => {


        if (this.showStepNumber > 4 && this.familyStatus && this.isSpouseIncome && this.statusChangeValidate_SpouseIncome) {
          this.statusChangeValidate_SpouseIncome = false;

          group.controls.spouseIncome.validator = Validators.required;
          group.controls.spouseIncome.enable();
        } else if (this.showStepNumber > 4 && this.familyStatus && !this.isSpouseIncome && !this.statusChangeValidate_SpouseIncome){
          this.statusChangeValidate_SpouseIncome = true;
          group.controls.spouseIncome.disable();
        }

        if (this.showStepNumber > 4 && this.familyStatus && this.statusChangeValidate_Spouse) {
          this.statusChangeValidate_Spouse = !this.statusChangeValidate_Spouse;

          group.controls.spousePhone.validator = Validators.required;
          group.controls.propertyOwner.validator = Validators.required;
          group.controls.spouseEmail.validator = Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}');
          group.controls.spouseEmail.enable();
          group.controls.spousePhone.enable();
          group.controls.propertyOwner.enable();

        } else if (this.showStepNumber > 4 && !this.familyStatus && !this.statusChangeValidate_Spouse){
          this.statusChangeValidate_Spouse = !this.statusChangeValidate_Spouse;

          group.controls.spouseEmail.disable();
          group.controls.spousePhone.disable();
          group.controls.propertyOwner.disable();
          group.controls.spouseIncome.disable();
        }

      }}),
      questionaryformAgree: this.FormBuilder.group({
        'agreeFull1': new FormControl(''),
        'agreeFull2': new FormControl('')
      },{ validator: (group) => {

        if (this.showStepNumber > 3 && this.statusChangeValidate_Agree) {
          this.statusChangeValidate_Agree = !this.statusChangeValidate_Agree;

          group.controls.agreeFull1.validator = Validators.requiredTrue;
          group.controls.agreeFull2.validator = Validators.requiredTrue;
          group.controls.agreeFull1.enable();
          group.controls.agreeFull2.enable();

        } else if ((this.showStepNumber <= 3 && !this.statusChangeValidate_Agree)) {
          this.statusChangeValidate_Agree = !this.statusChangeValidate_Agree;

          group.controls.agreeFull1.disable();
          group.controls.agreeFull2.disable();
        }

      }}),
      questionaryformMortgage: this.FormBuilder.group({
        'acquisitionRegion': new FormControl(''),
        'loanObject': new FormControl(''),
        'questionary_readyStatus': new FormControl(''),
        'questionary_realtyGuaranty': new FormControl(''),
        'salaryAfterTaxation': new FormControl(''),
        'monthlyExpenses': new FormControl(''),
        'ratesProgram': new FormControl(''),
        'salaryRosbank': new FormControl(''),
        'corporateRosbank': new FormControl(''),
        'lifeInsurance': new FormControl(''),
        'questionary_calculateBy': new FormControl(''),
        'realtyPrice': new FormControl(''),
        'creditSum': new FormControl(''),
        'paymetsSum': new FormControl(''),
        'salarySum': new FormControl(''),
        'initialFee': new FormControl(''),
        'term': new FormControl(''),
      })
    });
  }

  /**
   * check if cyrillic if not required
   * @param control
   * @returns {any}
   */
  latinValidation(control: FormControl){
    if (!control || !control.parent) {
      return null;
    }
    if (control.value && control.value.length >= 1){
      if (control.value.match('[а-яёА-ЯЁ -]+') == null){
        return {'latinValidation': true}
      } else {
        if (control.value.match('[а-яёА-ЯЁ -]+')[0] != control.value.match('[а-яёА-ЯЁ -]+').input){
          return {'latinValidation': true}
        }
      }
    }
    return null;
  }

  /**
   * url validation
   * @param control
   * @returns {null}
   */
  urlValidation(control: FormControl){
    if (!control || !control.parent) {
      return null;
    }
    if (control.value && control.value.length >= 1){
      let regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
      if (!regex.test(control.value)){
        return {'urlValidation': true}
      }
    }
    return null;
  }

  /**
   * scroll button to prev block
   */
  scrollToPrevBlock(e){
    e.preventDefault();

    let thisBlock = this.navItems[this.showStepNumber-1].hash;
    let elem: HTMLElement = this.document.getElementById(thisBlock) as HTMLElement;
    let questionaryElem: HTMLElement = this.document.getElementById('questionary') as HTMLElement;

    this.triggerScrollTo(elem, questionaryElem.offsetTop);
  }

  /**
   * get first block with errors
   * @returns {boolean}
   */
  getFirstErrorBlock(){
    for (let prop in this.questionaryform.controls) {
      if (!this.questionaryform.controls[prop].valid){
        this.showErrorScrollBlock = prop;
        return false;
      }
    }
  };

  /**
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  onSubmit(value: string) {

    this.showErrorScrollBlock = '';

    if(!this.questionaryform.valid){

      this.getFirstErrorBlock();

      this.showErrors = true;
      setTimeout(() => {
        this.showErrors = false;
      }, 10);

    } else {
      this.showStepNumber = this.showStepNumber + 1;
    }
  }


}
