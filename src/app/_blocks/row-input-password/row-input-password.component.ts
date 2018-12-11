import { Component, OnInit, Input, OnChanges, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RowInputPasswordComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-row-input-password',
  templateUrl: './row-input-password.component.html',
  styleUrls: ['./row-input-password.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class RowInputPasswordComponent implements OnInit, ControlValueAccessor, OnChanges {

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
  @Input() descText: string;

  @Output() errorStatusChange = new EventEmitter<boolean>();

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  private _value: any = '';

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

  constructor() { }

  ngOnInit() {
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
