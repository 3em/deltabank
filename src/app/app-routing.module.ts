import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PassRecoverComponent} from './pass-recover/pass-recover.component';
import {QuestionaryComponent} from './questionary/questionary.component';
import {PassSmsChangeComponent} from './pass-sms-change/pass-sms-change.component';
import {QuestionaryCompleteComponent} from './questionary-complete/questionary-complete.component';
import {DocumentsComponent} from './documents/documents.component';
import {DocumentsCompleteComponent} from './documents-complete/documents-complete.component';
import {InsuranceComponent} from './insurance/insurance.component';
import {PropertyComponent} from './property/property.component';
import {DealComponent} from './deal/deal.component';
import {ParticipantsComponent} from './participants/participants.component'
import {ParticipantsDocsComponent} from './participants-docs/participants-docs.component'
import {ValuationComponent} from './valuation/valuation.component'
import {ValuationCompleteComponent} from './valuation-complete/valuation-complete.component'
import {DealCompleteComponent} from './deal-complete/deal-complete.component'
import {DisabledExampleComponent} from './disabled-example/disabled-example.component'

const routes: Routes = [
  {
    path: 'login/:id',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'recover',
    component: PassRecoverComponent
  },
  {
    path: 'questionary',
    component: QuestionaryComponent
  },
  {
    path: 'sms-code',
    component: PassSmsChangeComponent
  },
  {
    path: 'questionary-complete',
    component: QuestionaryCompleteComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'documents-complete',
    component: DocumentsCompleteComponent
  },
  {
    path: 'insurance',
    component: InsuranceComponent
  },
  {
    path: 'property',
    component: PropertyComponent
  },
  {
    path: 'participants',
    component: ParticipantsComponent
  },
  {
    path: 'participants-docs',
    component: ParticipantsDocsComponent
  },
  {
    path: 'valuation',
    component: ValuationComponent
  },
  {
    path: 'valuation-complete',
    component: ValuationCompleteComponent
  },
  {
    path: 'deal',
    component: DealComponent
  },
  {
    path: 'deal-complete',
    component: DealCompleteComponent
  },
  {
    path: 'disabled-example',
    component: DisabledExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
