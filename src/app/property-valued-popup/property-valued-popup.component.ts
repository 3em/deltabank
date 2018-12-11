import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-property-valued-popup',
  templateUrl: './property-valued-popup.component.html',
  styleUrls: ['./property-valued-popup.component.scss']
})
export class PropertyValuedPopupComponent implements OnInit {

  display: boolean = false;
  propertySum: number = 22000000;

  constructor(@Inject(DOCUMENT) private document) {}

  @HostListener('document:keydown', ['$event'])

  /**
   * hide on ESC
   * @param event
   */
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27 && this.display) { // 27===ESC
      this.hideFn();
    }
  }

  /**
   * hide function and output display
   */
  hideFn(){
    if (this.display){
      this.display = !this.display;
    }
  }

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
