import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  display: boolean = false;
  popupShow: boolean = false;

  @Input() headerStatusFull: boolean;
  @Input() breadcrums: string;

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
   * click to show burger popup
   * @param e
   */
  showBurgerPopupLink(e){
    e.preventDefault();
    this.showBurgerPopup();
  }

  /**
   * display call popup
   */
  showCallPopup(){
    this.display = !this.display;
  }

  /**
   * display burger popup
   */
  showBurgerPopup(){
    this.popupShow = !this.popupShow;
  }
}
