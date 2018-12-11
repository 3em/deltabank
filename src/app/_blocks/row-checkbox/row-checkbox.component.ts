import { Component, OnInit, Input, Output, OnChanges, forwardRef, EventEmitter } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RowCheckboxComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-row-checkbox',
  templateUrl: './row-checkbox.component.html',
  styleUrls: ['./row-checkbox.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class RowCheckboxComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() nameInput: string;
  @Input() idInput: string;
  @Input() label: string;
  @Input() formControlName: string;
  @Input() value: boolean;
  @Input() group: FormGroup;
  @Input() labelText: string;

  @Output() changeCurrentValue = new EventEmitter<any>();

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get valueMod() {
    return this.value;
  }
  set valueMod(v: any) {
    if (v !== this.value && v !== '') {
      this.value = v;
      this.onChangeCallback(v);
      this.changeCurrentValue.emit(this.value);
    }
  }

  writeValue(value: any): void {
    if (value !== ''){
      this.value = value;
    }
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

}
