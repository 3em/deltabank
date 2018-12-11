import { Component, OnInit, Input, Output, OnChanges, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RowInputComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-row-input',
  templateUrl: './row-input.component.html',
  styleUrls: ['./row-input.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class RowInputComponent implements OnInit, ControlValueAccessor, OnChanges {

  statusFocus: boolean = false;
  @Input() labelText: string;
  @Input() placeholder: string;
  @Input() idInput: string;
  @Input() nameInput: string;
  @Input() type: string;
  @Input() errorText: string;
  @Input() showErrorStatus: boolean;
  @Input() formControlName: string;
  @Input() group: FormGroup;
  @Input() someVal: any;
  @Input() alertHtmlShow: boolean;
  @Input() descText: string;
  @Input() descTextLink: string;
  @Input() descTextLinkUrl: string;
  @Input() cyrillicValidation: boolean;
  @Input() disabledStatus: boolean;

  @Output() errorStatusChange = new EventEmitter<boolean>();
  @Output() changeCurrentValue = new EventEmitter<any>();

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  ngOnInit(){
  }

  get value() {
    return this.someVal;
  }
  set value(v: any) {
    if (v !== this.someVal) {
      this.someVal = v;
      this.onChangeCallback(v);
      this.changeCurrentValue.emit(this.someVal);
      this.checkCyrillicValidation(this.someVal);

      this.__tmpShowAlertPhoneHasAccount(this.someVal);

      if (this.cyrillicValidation){
        this.latinValidation(this.someVal);
      }
    }
  }

  writeValue(value: any): void {
    if (value !== '') {
      this.someVal = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  ngOnChanges(){
  }

  focus() {
    this.statusFocus = true;
    this.showErrorStatus = false;
    this.errorStatusChange.emit(this.showErrorStatus);
  }
  focusOut(){
    this.statusFocus = false;
  }

  /**
   * fake show alert if there is account on this number
   * @param value
   * @private
   */
  __tmpShowAlertPhoneHasAccount(value){
    let numValueLength = this.value.replace(/\D/g,'');

    (numValueLength === '89000000000') ? this.alertHtmlShow = true : this.alertHtmlShow = false;
  }

  /**
   * validate Cyrillic text error
   * @param value
   */
  checkCyrillicValidation(value){
    if (this.cyrillicValidation && value && value.length > 0){
      this.errorText = 'Заполните поле русскими буквами'
    } else if (this.cyrillicValidation && value.length === 0) {
      this.errorText = 'Обязательно для заполнения';
    }
  }

  /**
   * latin validation on keyup
   * @param value
   */
  latinValidation(value){
    if (value && value.length >= 1){
      if (value.match('[а-яёА-ЯЁ -]+') == null){
        this.showErrorStatus = true;
      } else {
        (value.match('[а-яёА-ЯЁ -]+')[0] != value.match('[а-яёА-ЯЁ -]+').input) ? this.showErrorStatus = true : this.showErrorStatus = false;
      }
    } else {
      this.showErrorStatus = false;
    }
    this.errorStatusChange.emit(this.showErrorStatus);
  }
}
