import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-participants-docs',
  templateUrl: './participants-docs.component.html',
  styleUrls: ['./participants-docs.component.scss']
})
export class ParticipantsDocsComponent implements OnInit {

  headerStatusFull: boolean = true;
  breadcrums: string = 'Оформление ипотеки';
  activeIndexNav: number = 5;
  finishStep: boolean = false;

  mobileWidthStatus: boolean;
  fileUploadText: string;
  objectKeys = Object.keys;

  uploadsList: Object = {
    'Недвижимость': [
        'Выписка из домовой книги',
        'Документ Бюро Технической Инвентаризации'
    ],
    'Продавец Петров Михаил Константинович': [
        'Правоустанавливещий документ',
        'Паспорт продавца'
    ]
  };

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
    this.router.navigate(['/valuation']);

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
