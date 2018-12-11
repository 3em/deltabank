import { Component, OnInit, Input, Output, EventEmitter, Inject, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-personal-data-agree-popup',
  templateUrl: './personal-data-agree-popup.component.html',
  styleUrls: ['./personal-data-agree-popup.component.scss']
})
export class PersonalDataAgreePopupComponent implements OnInit {

  @Input() display: boolean;
  @ViewChild('popupAgree') popupAgree: ElementRef;

  @Output() public fn: EventEmitter<any> = new EventEmitter();

  constructor(
      @Inject(DOCUMENT) private document,
      private _scrollToService: ScrollToService
  ) {}

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

  ngOnInit() {
  }

  /**
   * hide function and output display
   */
  hideFn(){
    if (this.display){
      this.fn.emit(true);
    }
  }

  showFn(e){
    this.popupAgree.nativeElement.scrollTo(0,0);
  }

  /**
   * scroll to elem
   * @param id
   */
  public triggerScrollTo(id) {
    const config: ScrollToConfigOptions = {
      target: id,
      offset: 170
    };
    this._scrollToService.scrollTo(config);
  }

}
