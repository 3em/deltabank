import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxWithLinkComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-checkbox-with-link',
  templateUrl: 'checkbox-with-link.component.html',
  styleUrls: ['checkbox-with-link.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class CheckboxWithLinkComponent implements OnInit, ControlValueAccessor {

  @Input() nameInput: string;
  @Input() idInput: string;
  @Input() label: string;
  @Input() formControlName: string;
  @Input() value: boolean;
  @Input() group: FormGroup;
  @Input() linkText: string;
  @Input() linkUrl: string;
  @Input() display: boolean;
  @Input() statusFalseAgree: boolean;
  @Input() disabled: boolean;

  @Output() public fn: EventEmitter<any> = new EventEmitter();
  @Output() changeCurrentValue = new EventEmitter<any>();

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  /**
   * click link on show popup personal data agree info
   * @param e
   */
  clickLinkLabel(e): void {
    if (!this.linkUrl && this.fn){
      e.preventDefault();
      this.fn.emit(false);
    }
  }

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

  clickInput(){
    if (this.disabled){
      this.changeCurrentValue.emit(this.value);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
