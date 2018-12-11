import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-documents-complete-success',
  templateUrl: './documents-complete-success.component.html',
  styleUrls: ['./documents-complete-success.component.scss']
})
export class DocumentsCompleteSuccessComponent implements OnInit {

  @Input() creditSum: number;

  constructor() { }

  ngOnInit() {
  }

  /**
   * format price
   * @param val
   * @returns {string}
   */
  formating(val) {
    return String(val).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
  };

}
