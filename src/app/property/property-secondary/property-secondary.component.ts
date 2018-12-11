import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-secondary',
  templateUrl: './property-secondary.component.html',
  styleUrls: ['./property-secondary.component.scss']
})
export class PropertySecondaryComponent implements OnInit {

  submittedForm: boolean = false;

  address: string;

  constructor() { }

  ngOnInit() {
  }

  changeSubmittedStatus(event){
    this.submittedForm = event;
  }

  saveAddress(event){
    this.address = event;
  }

}
