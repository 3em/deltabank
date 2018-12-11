import { Component, OnInit, Input, Output, OnChanges, EventEmitter, forwardRef, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RowInputAutocompleteComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-row-input-autocomplete',
  templateUrl: './row-input-autocomplete.component.html',
  styleUrls: ['./row-input-autocomplete.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class RowInputAutocompleteComponent implements OnInit, ControlValueAccessor, OnChanges {

  statusFocus: boolean = false;
  @Input() labelText: string;
  @Input() idInput: string;
  @Input() placeholder: string;
  @Input() list: string[];
  @Input() errorText: string;
  @Input() showErrorStatus: boolean;
  @Input() formControlName: string;
  @Input() group: FormGroup;

  @Output() errorStatusChange = new EventEmitter<boolean>();

  text: string;
  highlightText: string;
  currentVal: string = 'blank';
  statusClickedButton: boolean = false;

  filteredList: any[] = [];

  windowWidth: number = window.innerWidth;
  @ViewChild('formItem') formItem: ElementRef;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  private _value: any = '';

  /**
   * set width for blur bg
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  constructor(private _scrollToService: ScrollToService) { }

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

  dropdownClick(){
    let thisValLength = this._value.length;

    if (thisValLength == 0 && this.statusClickedButton){
      this.statusClickedButton = false;
    } else if (thisValLength == 0 && !this.statusClickedButton){
      this.statusClickedButton = true;
    }
  }

  search(event) {
    this.filteredList = [];
    for(let i = 0; i < this.list.length; i++) {
      let text = this.list[i];
      if(text.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredList.push(text);
        this.highlightText = event.query;
      }
    }
  }

  select(){
    this.statusClickedButton = false;
  }

  focus() {
    this.statusFocus = true;
    this.showErrorStatus = false;
    this.errorStatusChange.emit(this.showErrorStatus);

    if (this.windowWidth < 768){
      let offsetTopAll = this.getOffsetTop(this.formItem.nativeElement);

      const config: ScrollToConfigOptions = {
        target: this.formItem.nativeElement,
        offset: offsetTopAll - this.formItem.nativeElement.offsetTop - 40
      };
      this._scrollToService.scrollTo(config);

    }
  }

  /**
   * get offset all parent
   * @param elem
   * @returns {number}
   */
  getOffsetTop( elem ){
    let offsetTop = 0;
    do {
      if ( !isNaN( elem.offsetTop ) )
      {
        offsetTop += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );
    return offsetTop;
  }

  focusOut(){
    this.statusFocus = false;
    this.currentVal = 'blank';

  }

  ngOnInit() {
  }
  ngOnChanges(){
  }

}
