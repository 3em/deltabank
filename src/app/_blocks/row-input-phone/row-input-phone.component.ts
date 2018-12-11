import { Component, OnInit, Input, Output, OnChanges, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RowInputPhoneComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-row-input-phone',
  templateUrl: './row-input-phone.component.html',
  styleUrls: ['./row-input-phone.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class RowInputPhoneComponent implements OnInit, ControlValueAccessor {

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
  @Input() mask: any;
  @Input() descText: string;
  @Input() descTextLink: string;
  @Input() descTextLinkUrl: string;
  @Input() someVal: any;
  @Input() alertHtmlShow: boolean;
  @Input() disabledStatus: boolean;

  @Output() errorStatusChange = new EventEmitter<boolean>();
  @Output() changeCurrentValue = new EventEmitter<any>();
  savedErrorDefaultText: string;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  ngOnInit() {
    this.savedErrorDefaultText = this.errorText;
  }

  get value() {
    this.changeAllertText(this.someVal)
    return this.someVal;
  }
  set value(v: any) {
    if (v !== this.someVal) {
      this.someVal = v;
      this.onChangeCallback(v);
      this.changeCurrentValue.emit(this.someVal);

      this.__tmpShowAlertPhoneHasAccount(this.someVal);
      this.showAmountError(this.someVal);
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

  focus() {
    this.statusFocus = true;
    this.showErrorStatus = false;
    this.errorStatusChange.emit(this.showErrorStatus);
  }
  focusOut(){
    this.statusFocus = false;
  }

  changeAllertText(value){
    if (value){
      let normalLength = 11;
      let val = value.replace(/[a ()+-]/g, '');

      if (val.length > normalLength){
        this.errorText = 'Введен лишний символ'
      } else {
        this.errorText = this.savedErrorDefaultText;
      }

    }
  }

  /**
   * fake show alert if there is account on this number
   * @param value
   * @private
   */
  __tmpShowAlertPhoneHasAccount(value){
    let numValueLength = value.replace(/\D/g,'');

    (numValueLength === '79000000000') ? this.alertHtmlShow = true : this.alertHtmlShow = false;
  }

  /**
   * show error if more numbers insert while type
   * @param value
   */
  showAmountError(value){
    let val = value.replace(/[a ()+-]/g, '');
    if (val.length > 11){
      this.showErrorStatus = true;
      this.errorStatusChange.emit(this.showErrorStatus);
    } else {
      this.showErrorStatus = false;
      this.errorStatusChange.emit(this.showErrorStatus);
    }
  }

}
