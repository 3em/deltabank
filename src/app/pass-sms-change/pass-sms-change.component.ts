import { Component, OnInit, HostListener, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pass-sms-change',
  templateUrl: './pass-sms-change.component.html',
  styleUrls: ['./pass-sms-change.component.scss']
})
export class PassSmsChangeComponent implements OnInit, OnChanges {

  headerStatusFull: boolean = false;

  showChangePass: boolean;

  windowWidth: number = window.innerWidth;

  /**
   * set width for blur bg
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  constructor() {
    this.showChangePass = false;
  }

  changePassStateUpdate(event){
    this.showChangePass = event;
  }

  ngOnInit() {
  }
  ngOnChanges(){
  }

}
