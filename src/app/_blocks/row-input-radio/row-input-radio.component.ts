import { Component, OnInit, Input, Output, forwardRef, EventEmitter } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RowInputRadioComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-row-input-radio',
  templateUrl: './row-input-radio.component.html',
  styleUrls: ['./row-input-radio.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class RowInputRadioComponent implements OnInit {

  statusFocus: boolean = false;
  labelId: any;


  @Input() labelText: string;
  @Input() group: FormGroup;
  @Input() currentValue: string;
  @Input() nameInput: string;
  @Input() inputs: any;

  objectKeys = Object.keys;

  @Output() changeCurrentValue = new EventEmitter<string>(true);

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get valueMod() {
    return this.currentValue;
  }
  set valueMod(v: any) {
    if (v !== this.currentValue) {
      this.currentValue = v;
      this.changeCurrentValue.emit(this.currentValue);
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any): void {
    this.currentValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  constructor() { }

  ngOnInit() {
    this.labelId = this.inputs[0].id;
  }

  focus() {
    this.statusFocus = true;
  }
  focusOut(){
    this.statusFocus = false;
  }

}
