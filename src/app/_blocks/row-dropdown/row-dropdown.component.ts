import { Component, OnInit, Input, Output, EventEmitter, forwardRef, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

interface Item {
  name: string;
  value: string;
}

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RowDropdownComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-row-dropdown',
  templateUrl: './row-dropdown.component.html',
  styleUrls: ['./row-dropdown.component.scss'],
  providers: [VALUE_ACCESSOR]
})

export class RowDropdownComponent implements OnInit, ControlValueAccessor {

  statusFocus: boolean = false;

  @Input() labelText: string;
  @Input() placeholder: string;
  @Input() idInput: string;
  @Input() nameInput: string;
  @Input() errorText: string;
  @Input() showErrorStatus: boolean;
  @Input() formControlName: string;
  @Input() values: Item[];
  @Input() group: FormGroup;
  @Input() selectedItem: any;
  @Input() panelClass: string;
  @Input() appendElem: any;
  @Input() disabledStatus: boolean;
  @Input() changeChange: boolean;

  @Output() errorStatusChange = new EventEmitter<boolean>(true);
  @Output() changeCurrentValue = new EventEmitter<any>(true);

  windowWidth: number = window.innerWidth;
  @ViewChild('formItem') formItem: ElementRef;

  private _selectedItem: Item;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  /**
   * set width for blur bg
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  ngOnInit() {
  }


  get valueMod() {
    if (this.changeChange){
      this.selectedItem = '';
    }

    return this.selectedItem;
  }
  set valueMod(v: any) {
    if (v !== this.selectedItem) {
      this.selectedItem = v;
      this.changeCurrentValue.emit(this.selectedItem);
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any): void {
    if (value !== ''){
      this.selectedItem = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  constructor(private _scrollToService: ScrollToService) {
  }

  changeValue(){}

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
  }

}
