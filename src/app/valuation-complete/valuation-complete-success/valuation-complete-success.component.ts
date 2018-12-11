import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-valuation-complete-success',
  templateUrl: './valuation-complete-success.component.html',
  styleUrls: ['./valuation-complete-success.component.scss']
})
export class ValuationCompleteSuccessComponent implements OnInit {

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
