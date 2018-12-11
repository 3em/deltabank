import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  activeIndexNav: number = 1;
  finishStep: boolean = false;
  display: boolean = false;
  mobileWidthStatus: boolean;
  fileUploadText: string;

  uploadsList = [
    'Паспорт иностранного гражданина',
    'Перевод паспорта',
    'Справка 2–НДФЛ',
    'Трудовая книжка'
  ];


  constructor(private router: Router) { }

  ngOnInit() {
    this.resizeWindowChanges();
  }

  /**
   * submit form or show error fields
   * @param value
   * @returns {boolean}
   */
  submitFiles(e) {
    e.preventDefault();
    // trigger uploads of files

    //rout
    this.router.navigate(['/documents-complete']);

  }

  /**
   * click link
   * @param e
   */
  showSignPopupLink(e){
    e.preventDefault();
    this.showSignPopup();
  }

  /**
   * display call popup
   */
  showSignPopup(){
    this.display = !this.display;
  }

  /**
   * onresize
   */
  onResize(event){
    this.resizeWindowChanges();
  }

  resizeWindowChanges(){
    (window.innerWidth < 768) ? this.mobileWidthStatus = true : this.mobileWidthStatus = false;
    (window.innerWidth < 768) ? this.fileUploadText = 'Загрузить документы' : this.fileUploadText = 'Загрузить несколько документов одним файлом';
  }

}
