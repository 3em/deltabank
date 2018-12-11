import { Component, OnInit, Input, EventEmitter, Output, forwardRef, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RowDatapickerComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-row-datapicker',
  templateUrl: './row-datapicker.component.html',
  styleUrls: ['./row-datapicker.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class RowDatapickerComponent implements OnInit {

  statusFocus: boolean = false;
  ru: any;

  @Input() labelText: string;
  @Input() placeholder: string;
  @Input() idInput: string;
  @Input() nameInput: string;
  @Input() errorText: string;
  @Input() showErrorStatus: boolean;
  @Input() formControlName: string;
  @Input() group: FormGroup;
  @Input() date: Date;
  @Input() inlineStatus: boolean;
  @Input() navigator: boolean;
  minDate: Date;
  maxDate: Date;
  minYear: any;
  maxYear: any;
  yearsRange: string;

  windowWidth: number = window.innerWidth;
  @ViewChild('formItem') formItem: ElementRef;

  @Output() errorStatusChange = new EventEmitter<boolean>();
  @Output() changeCurrentValue = new EventEmitter<any>();

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

  writeValue(value: any): void {
    this._value = value;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  selectValue(){
    this.changeCurrentValue.emit(this.date);
  }

  ngOnInit() {
    this.setMaxMinDates();
    this.ru = {
      firstDayOfWeek: 1,
      dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      dayNamesShort: ["Вскр", "Пн", "Вт", "Ср", "Чт", "Пт", "Суб"],
      dayNamesMin: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
      monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
      monthNamesShort: [ "Янв", "Фев", "Март", "Апр", "Май", "Июн","Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
      today: 'Сегодня',
      clear: 'Очистить'
    };
  }

  onType(e){
    let $thisInput = <HTMLInputElement>document.getElementById(this.idInput);
    let value = $thisInput.value;
    let prevValue = value.slice(0, -1) + '';
    let newVal;
    
    if ( (value.length < 3 || (value.length > 3 && value.length < 6) || (value.length > 6 && value.length < 11)) && e.data && !e.data.match('[0-9]')){
      newVal = value.slice(0, -1) + '';
      $thisInput.value = newVal;

    } else if ( (value.length == 2 || value.length == 5 ) && e.data && e.data.match('[0-9]')){

      let preLastType = value.slice(value.length-2,value.length-1);

      if (value.length == 2 && prevValue == '3' && !e.data.match('[0-1]')){
        newVal = value.slice(0, -1) + '';
        $thisInput.value = newVal;
      } else if (value.length == 5 && ( (preLastType == '1' && !e.data.match('[0-2]')) || (preLastType == '0' && e.data.match('[0]')) )){
        newVal = value.slice(0, -1) + '';
        $thisInput.value = newVal;
      } else {
        $thisInput.value = value+'.';
      }

    } else if ( (value.length == 3 || value.length == 6) && e.data && e.data !== '.'){
      $thisInput.value = value.replace(e.data,'.');
    } else if (value.length > 10 && e.data){
      newVal = value.slice(0, -1) + '';
      $thisInput.value = newVal;
    } else if (value.length == 1 && e.data && !e.data.match('[0-3]')){
      newVal = value.slice(0, -1) + '';
      $thisInput.value = newVal;
    } else if (value.length == 4 && e.data && !e.data.match('[0-1]')){
      newVal = value.slice(0, -1) + '';
      $thisInput.value = newVal;
    } else if (value.length == 10 && e.data){

      let thisYear = parseInt(value.slice(value.length-4,value.length));
      if (thisYear > this.maxYear || thisYear < this.minYear){
        newVal = value.replace(value.slice(value.length-4,value.length), '');
        $thisInput.value = newVal;
      }
    }
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
    this.changeCurrentValue.emit(this.date);
  }

  /**
   * set min and max date
   */
  setMaxMinDates(){
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    this.minYear = year-100;
    this.maxYear = year+100;

    this.yearsRange=this.minYear+":"+this.maxYear;

    this.minDate = new Date();
    this.minDate.setMonth(month);
    this.minDate.setFullYear(this.minYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(month);
    this.maxDate.setFullYear(this.maxYear);
  }

}
