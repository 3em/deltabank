import { Component, OnInit, HostListener, Inject } from '@angular/core';
import {Validators,FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-property-primary',
  templateUrl: './property-primary.component.html',
  styleUrls: ['./property-primary.component.scss']
})
export class PropertyPrimaryComponent implements OnInit {

  propertyform: FormGroup;

  display: boolean = false;

  propertyFormFields: Object = {
    'developer': {
      id: 'developer',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Застройщик',
      placeholder: '',
      nameInput: 'property_developer',
      values: [
        {name: 'Абсолют Недвижимость', value: 'option-1'},
        {name: 'Абсолют Недвижимость 2', value: 'option-2'},
        {name: 'Абсолют Недвижимость 3', value: 'option-3'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    },
    'object': {
      id: 'object',
      showErrorStatus: false,
      errorText: 'Обязательно для заполнения',
      labelText: 'Объект строительства',
      placeholder: '',
      nameInput: 'property_object',
      values: [
        {name: 'ЖК «Резиденции Сколково»', value: 'option-1'},
        {name: 'ЖК «Резиденции Сколково» 2', value: 'option-2'},
        {name: 'ЖК «Резиденции Сколково» 3', value: 'option-3'}
      ],
      selectedItem: '',
      panelClass: 'b-questionary__dropdown'
    }
  };

  constructor(
      private FormBuilder: FormBuilder,
      private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * init form
   */
  initForm() {
    this.propertyform = this.FormBuilder.group({
      'developer': new FormControl('', Validators.required),
      'object': new FormControl('', Validators.required),
    });
  }

  changeCurrentValueDeveloper(event){
    this.propertyFormFields['developer'].selectedItem = event;
  }
  changeCurrentValueObject(event){
    this.propertyFormFields['object'].selectedItem = event;
  }

  onSubmit(){
    if (this.propertyform.valid){

      this.router.navigate(['valuation-complete']);

    } else {

      for (let prop in this.propertyform.controls) {
        if (this.propertyform.controls[prop].status == 'INVALID' && this.propertyFormFields[prop]){
          this.propertyFormFields[prop].showErrorStatus = true;
        }
      }
      return false;
    }
  }

  /**
   * click link
   * @param e
   */
  showCallPopupLink(e){
    e.preventDefault();
    this.showCallPopup();
  }

  /**
   * display call popup
   */
  showCallPopup(){
    this.display = !this.display;
  }

}
