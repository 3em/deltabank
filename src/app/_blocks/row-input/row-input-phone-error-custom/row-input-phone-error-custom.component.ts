import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-input-phone-error-custom',
  templateUrl: './row-input-phone-error-custom.component.html',
  styleUrls: ['./row-input-phone-error-custom.component.scss']
})
export class RowInputPhoneErrorCustomComponent implements OnInit {

  text: string = 'Обязательно для заполнения';

  @Input() inputValue: any;

  changeText(){
    let normalLength = 11;

    if (this.inputValue){

      let numValueLength = this.inputValue.replace(/\D/g,'').length;

      if ( (numValueLength < normalLength && numValueLength != 0) || (numValueLength == 0 ) && this.inputValue.length > 0 ) {
        this.text = 'Неверный формат телефона';
      } else if (numValueLength > normalLength){
        let errorNum = numValueLength - normalLength;
        this.text = 'Вы ввели '+errorNum+' лишние цифры';
      } else if (numValueLength == 0 && this.inputValue.length == 0){
        this.text = 'Обязательно для заполнения';
      }

    }
  }

  constructor() { }

  ngOnInit() {
    this.changeText();
  }

}
