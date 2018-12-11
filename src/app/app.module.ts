import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputMaskModule} from 'primeng/inputmask';
import {SidebarModule} from 'primeng/sidebar';
import {StepsModule} from 'primeng/steps';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {FileUploadModule} from 'primeng/fileupload';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import { WINDOW_PROVIDERS, WINDOW } from "./window.service";

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { RowInputComponent } from './_blocks/row-input/row-input.component';
import { RowInputPasswordComponent } from './_blocks/row-input-password/row-input-password.component';
import { RowInputAutocompleteComponent } from './_blocks/row-input-autocomplete/row-input-autocomplete.component';
import { RowCheckboxComponent } from './_blocks/row-checkbox/row-checkbox.component';
import { FooterComponent } from './footer/footer.component';
import { EnterComponent } from './login/enter/enter.component';
import { PassRecoverComponent } from './pass-recover/pass-recover.component';
import { QuestionaryComponent } from './questionary/questionary.component';
import { RowInputPhoneComponent } from './_blocks/row-input-phone/row-input-phone.component';
import { RowInputPhoneAlertComponent } from './_blocks/row-input/row-input-phone-alert/row-input-phone-alert.component';
import { RowInputPhoneErrorCustomComponent } from './_blocks/row-input/row-input-phone-error-custom/row-input-phone-error-custom.component';
import { PassSmsChangeComponent } from './pass-sms-change/pass-sms-change.component';
import { SmsCodeComponent } from './pass-sms-change/sms-code/sms-code.component';
import { NewPassComponent } from './pass-sms-change/new-pass/new-pass.component';
import { CheckboxWithLinkComponent } from './_blocks/checkbox-with-link/checkbox-with-link.component';
import { PersonalDataAgreePopupComponent } from './personal-data-agree-popup/personal-data-agree-popup.component';
import { QuestionaryAboutComponent } from './questionary/questionary-about/questionary-about.component';
import { RowInputRadioComponent } from './_blocks/row-input-radio/row-input-radio.component';
import { RowDatapickerComponent } from './_blocks/row-datapicker/row-datapicker.component';
import { RowDropdownComponent } from './_blocks/row-dropdown/row-dropdown.component';
import { RowInputMaskComponent } from './_blocks/row-input-mask/row-input-mask.component';
import { QuestionarySmsCodeComponent } from './questionary/questionary-sms-code/questionary-sms-code.component';
import { QuestionaryWorkComponent } from './questionary/questionary-work/questionary-work.component';
import { QuestionaryIncomeComponent } from './questionary/questionary-income/questionary-income.component';
import { RowInputPriceComponent } from './_blocks/row-input-price/row-input-price.component';
import { MycurrencyPipe } from './pipe/mycurrency.pipe';
import { MycurrencyDirective } from './directive/mycurrency.directive';
import { QuestionaryCostsComponent } from './questionary/questionary-costs/questionary-costs.component';
import { QuestionaryQuestionsComponent } from './questionary/questionary-questions/questionary-questions.component';
import { QuestionaryQuestionsAgreeComponent } from './questionary/questionary-questions-agree/questionary-questions-agree.component';
import { QuestionaryMortgageComponent } from './questionary/questionary-mortgage/questionary-mortgage.component';
import { QuestionaryCalculationComponent } from './questionary/questionary-calculation/questionary-calculation.component';
import { QuestionaryCalculationResultComponent } from './questionary/questionary-calculation/questionary-calculation-result/questionary-calculation-result.component';
import { QuestionarySpouseComponent } from './questionary/questionary-spouse/questionary-spouse.component';
import { QuestionarySavedCalcComponent } from './questionary/questionary-saved-calc/questionary-saved-calc.component';
import { QuestionaryCompleteComponent } from './questionary-complete/questionary-complete.component';
import { QuestionaryCompleteWaitComponent } from './questionary-complete/questionary-complete-wait/questionary-complete-wait.component';
import { QuestionaryCompleteCheckboxComponent } from './questionary-complete/questionary-complete-checkbox/questionary-complete-checkbox.component';
import { QuestionaryCompleteNotEnoughDataComponent } from './questionary-complete/questionary-complete-not-enough-data/questionary-complete-not-enough-data.component';
import { QuestionaryCompleteSuccessComponent } from './questionary-complete/questionary-complete-success/questionary-complete-success.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CallPopupComponent } from './call-popup/call-popup.component';
import { SignPopupComponent } from './sign-popup/sign-popup.component';
import { DocumentsComponent } from './documents/documents.component';
import { FileUploadComponent } from './_blocks/file-upload/file-upload.component';
import { DocumentsCompleteComponent } from './documents-complete/documents-complete.component';
import { DocumentsCompleteWaitComponent } from './documents-complete/documents-complete-wait/documents-complete-wait.component';
import { DocumentsCompleteSuccessComponent } from './documents-complete/documents-complete-success/documents-complete-success.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceDefaultComponent } from './insurance/insurance-default/insurance-default.component';
import { InsuranceSuccessComponent } from './insurance/insurance-success/insurance-success.component';
import { PropertyComponent } from './property/property.component';
import { PropertyValuedPopupComponent } from './property-valued-popup/property-valued-popup.component';
import { PropertyPrimaryComponent } from './property/property-primary/property-primary.component';
import { PropertySecondaryEditComponent } from './property/property-secondary-edit/property-secondary-edit.component';
import { PropertySecondaryComponent } from './property/property-secondary/property-secondary.component';
import { DealComponent } from './deal/deal.component';
import { ParticipantsComponent } from './participants/participants.component';
import { PropertySecondarySuccessComponent } from './property/property-secondary-success/property-secondary-success.component';
import { ParticipantsItemComponent } from './participants/participants-item/participants-item.component';
import { ParticipantsDocsComponent } from './participants-docs/participants-docs.component';
import { ValuationComponent } from './valuation/valuation.component';
import { ValuationFormComponent } from './valuation/valuation-form/valuation-form.component';
import { ValuationErrorComponent } from './valuation/valuation-error/valuation-error.component';
import { ValuationCompleteComponent } from './valuation-complete/valuation-complete.component';
import { ValuationCompleteWaitComponent } from './valuation-complete/valuation-complete-wait/valuation-complete-wait.component';
import { ValuationCompleteSuccessComponent } from './valuation-complete/valuation-complete-success/valuation-complete-success.component';
import { DealCompleteComponent } from './deal-complete/deal-complete.component';
import { DisabledExampleComponent } from './disabled-example/disabled-example.component';
import { HeaderBurgerPopupComponent } from './header/header-burger-popup/header-burger-popup.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    RowInputComponent,
    RowInputPasswordComponent,
    RowInputAutocompleteComponent,
    RowCheckboxComponent,
    FooterComponent,
    EnterComponent,
    PassRecoverComponent,
    QuestionaryComponent,
    RowInputPhoneComponent,
    RowInputPhoneAlertComponent,
    RowInputPhoneErrorCustomComponent,
    PassSmsChangeComponent,
    SmsCodeComponent,
    NewPassComponent,
    CheckboxWithLinkComponent,
    PersonalDataAgreePopupComponent,
    QuestionaryAboutComponent,
    RowInputRadioComponent,
    RowDatapickerComponent,
    RowDropdownComponent,
    RowInputMaskComponent,
    QuestionarySmsCodeComponent,
    QuestionaryWorkComponent,
    QuestionaryIncomeComponent,
    RowInputPriceComponent,
    MycurrencyPipe,
    MycurrencyDirective,
    QuestionaryCostsComponent,
    QuestionaryQuestionsComponent,
    QuestionaryQuestionsAgreeComponent,
    QuestionaryMortgageComponent,
    QuestionaryCalculationComponent,
    QuestionaryCalculationResultComponent,
    QuestionarySpouseComponent,
    QuestionarySavedCalcComponent,
    QuestionaryCompleteComponent,
    QuestionaryCompleteWaitComponent,
    QuestionaryCompleteCheckboxComponent,
    QuestionaryCompleteNotEnoughDataComponent,
    QuestionaryCompleteSuccessComponent,
    NavigationComponent,
    CallPopupComponent,
    SignPopupComponent,
    DocumentsComponent,
    FileUploadComponent,
    DocumentsCompleteComponent,
    DocumentsCompleteWaitComponent,
    DocumentsCompleteSuccessComponent,
    InsuranceComponent,
    InsuranceDefaultComponent,
    InsuranceSuccessComponent,
    PropertyComponent,
    PropertyValuedPopupComponent,
    PropertyPrimaryComponent,
    PropertySecondaryEditComponent,
    PropertySecondaryComponent,
    DealComponent,
    ParticipantsComponent,
    PropertySecondarySuccessComponent,
    ParticipantsItemComponent,
    ParticipantsDocsComponent,
    ValuationComponent,
    ValuationFormComponent,
    ValuationErrorComponent,
    ValuationCompleteComponent,
    ValuationCompleteWaitComponent,
    ValuationCompleteSuccessComponent,
    DealCompleteComponent,
    DisabledExampleComponent,
    HeaderBurgerPopupComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    InputTextModule,
    PasswordModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    ScrollToModule.forRoot(),
    InputMaskModule,
    SidebarModule,
    BrowserAnimationsModule,
    StepsModule,
    RadioButtonModule,
    CalendarModule,
    DropdownModule,
    OverlayPanelModule,
    FileUploadModule,
    ScrollPanelModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
