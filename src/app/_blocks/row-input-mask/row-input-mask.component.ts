import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RowInputMaskComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-row-input-mask',
  templateUrl: './row-input-mask.component.html',
  styleUrls: ['./row-input-mask.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class RowInputMaskComponent implements OnInit, ControlValueAccessor {

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
  @Input() slotChar: string = '_';
  @Input() disabledStatus: boolean;

  @Output() errorStatusChange = new EventEmitter<boolean>();

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  private _value: any = '';

  constructor() { }

  ngOnInit() {
  }

  get value() {
    return this._value;
  }
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any): void {
    this._value = value;
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

}
