import { Component, OnInit, Input, OnChanges, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => QuestionaryCompleteCheckboxComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-questionary-complete-checkbox',
  templateUrl: './questionary-complete-checkbox.component.html',
  styleUrls: ['./questionary-complete-checkbox.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class QuestionaryCompleteCheckboxComponent implements OnInit, ControlValueAccessor {

  @Input() nameInput: string;
  @Input() idInput: string;
  @Input() label: string;
  @Input() formControlName: string;
  @Input() labelSum: number;
  @Input() value: boolean;
  @Input() group: FormGroup;

  @Output() public fn: EventEmitter<any> = new EventEmitter();
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

  clickInput(){
    this.changeCurrentValue.emit(this.value);
  }

  constructor() { }

  ngOnInit() {
    this.changeCurrentValue.emit(this.value);
  }

  /**
   * alert show
   * @param event
   * @param ref
   */
  alertShow(event, ref){
    ref.show(event);
  }

  /**
   * alert hide
   * @param event
   * @param ref
   */
  alertHide(event, ref){
    ref.hide(event);
  }

  /**
   * format price
   * @param val
   * @returns {string}
   */
  formating(val) {
    return String(val).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
  };

}
