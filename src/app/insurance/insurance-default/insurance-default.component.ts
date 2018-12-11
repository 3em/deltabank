import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-default',
  templateUrl: './insurance-default.component.html',
  styleUrls: ['./insurance-default.component.scss']
})
export class InsuranceDefaultComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * click link
   * @param e
   */
  showCallPopupLink(e){
    e.preventDefault();
    this.showCallPopup();
  }

  /**
   * display call popup
   */
  showCallPopup(){
    this.display = !this.display;
  }

}
