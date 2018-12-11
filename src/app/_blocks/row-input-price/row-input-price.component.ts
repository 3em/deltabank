import { Component, OnInit, Input, Output, OnChanges, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MycurrencyPipe } from "../../pipe/mycurrency.pipe";
import { MycurrencyDirective } from '../../directive/mycurrency.directive';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RowInputPriceComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-row-input-price',
  templateUrl: './row-input-price.component.html',
  styleUrls: ['./row-input-price.component.scss'],
  providers: [VALUE_ACCESSOR, MycurrencyPipe]
})
export class RowInputPriceComponent implements OnInit, ControlValueAccessor, OnChanges {

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

}
