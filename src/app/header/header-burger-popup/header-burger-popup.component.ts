import { Component, OnInit, Input, Output, EventEmitter, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header-burger-popup',
  templateUrl: './header-burger-popup.component.html',
  styleUrls: ['./header-burger-popup.component.scss']
})
export class HeaderBurgerPopupComponent implements OnInit {

  @Input() popupShow: boolean;
  @Output() public fn: EventEmitter<any> = new EventEmitter();
  @Output() public showCallPopupLink: EventEmitter<any> = new EventEmitter();

  windowWidth: number = window.innerWidth;

  constructor(@Inject(DOCUMENT) private document) {}

  @HostListener('document:keydown', ['$event'])

  /**
   * set width for blur bg
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.closeBurgerPopupOnResize(this.windowWidth);
  }

  /**
   * hide on ESC
   * @param event
   */
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27 && this.popupShow) {
      this.hideFn();
    }
  }



  /**
   * close popup on overlay click
   * @param e
   */
  hideOverlay(e){
    if (e.target.className == 'b-burger__overlay'){
      this.hideFn();
    }
  }

  /**
   * hide function and output display
   */
  hideFn(){

    if (this.popupShow){
      this.popupShow = !this.popupShow;

      this.fn.emit(this.popupShow);
    }
  }

  ngOnInit() {
  }

  showCallPopupLinkBurger(e){
    e.preventDefault();
    this.showCallPopupLink.emit(e);
  }

  closeBurgerPopupOnResize(width){
    if (width >= 790){
      this.hideFn();
    }
  }

}
