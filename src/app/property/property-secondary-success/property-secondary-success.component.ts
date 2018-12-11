import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-property-secondary-success',
  templateUrl: './property-secondary-success.component.html',
  styleUrls: ['./property-secondary-success.component.scss']
})
export class PropertySecondarySuccessComponent implements OnInit {

  @Input() address: string;
  @Output() changeSubmittedStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  changeAddress(e){
    e.preventDefault();
    this.changeSubmittedStatus.emit(false);
  }

}
