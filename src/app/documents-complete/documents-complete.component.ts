import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents-complete',
  templateUrl: './documents-complete.component.html',
  styleUrls: ['./documents-complete.component.scss']
})
export class DocumentsCompleteComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  activeIndexNav: number = 1;
  statusWait: boolean = false;
  finishStep: boolean = !this.statusWait;
  success: boolean = true;
  creditSum: number = 22000000;

  constructor() { }

  ngOnInit() {
  }

}
