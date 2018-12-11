import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  @Input() activeIndex: number;
  @Input() finish: boolean;
  iconLeftPosition: number = 0;
  @Input() bigNavStatus: boolean;
  @Input() participantsProveStatus: boolean;

  @ViewChild('mainNav') mainNav: ElementRef;
  @ViewChild('navIcon') navIcon: ElementRef;

  navItems = [];
  lastCompleteStep: number = 3;

  /**
   * set width for blur bg
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    setTimeout(() => this.leftIconPosition(), 0);
  }

  constructor(private router: Router) { }

  ngAfterViewInit(){
    setTimeout(() => this.leftIconPosition(), 0);
  }

  ngOnInit() {
    this.navItems = [
      {
        id: 0,
        label: 'Анкета и расчеты',
        hash: 'questionary',
        percent: '-0,2',
        faq: '',
        finish: false,
        display: true
      }, {
        id: 1,
        label: 'Документы',
        hash: 'documents',
        percent: '–0,05',
        faq: 'Понизим ставку на  0,05% при загрузке документов онлайн. Сэкономьте до 98 000 ₽',
        finish: false,
        display: true
      }, {
        id: 2,
        label: 'Страхование',
        hash: 'insurance',
        percent: '',
        faq: '',
        finish: false,
        display: true
      }, {
        id: 3,
        label: 'Недвижимость',
        hash: 'property',
        percent: '',
        faq: '',
        finish: false,
        display: true
      }, {
        id: 4,
        label: 'Участники',
        hash: 'participants',
        percent: '',
        faq: '',
        finish: false,
        display: this.bigNavStatus
      }, {
        id: 5,
        label: 'Документы',
        hash: 'participants-docs',
        percent: '',
        faq: '',
        finish: false,
        display: this.bigNavStatus
      }, {
        id: 6,
        label: 'Оценка',
        hash: 'valuation',
        percent: '',
        faq: '',
        finish: false,
        display: true
      }, {
        id: 7,
        label: 'Сделка',
        hash: 'deal',
        percent: '',
        faq: '',
        finish: false,
        display: true
      }
    ];

    //scroll to active
    setTimeout(() => this.scrollLeftNav(), 0);

  }

  /**
   * set nav scroll if more than window
   */
  scrollLeftNav(){
    let $thisItem = document.getElementById('nav-'+this.activeIndex);
    let leftItemPos = $thisItem.offsetLeft + 20;
    let $scrollNav = this.mainNav.nativeElement.closest('.ui-scrollpanel-content');
    let scrollVal = 0;
    let windowWidth = window.outerWidth;
    let magicPaddingItem = (window.outerWidth > 767) ? 100 : 30;
    if (windowWidth - 200 < leftItemPos){
      scrollVal = windowWidth / 2 + (leftItemPos - windowWidth) + $thisItem.offsetWidth / 2 - magicPaddingItem;
    }
    $scrollNav.scrollTo(scrollVal,0);
  }

  /**
   * icon left position
   */
  leftIconPosition(){
    let currentNavItem: HTMLElement = document.getElementById('nav-'+this.activeIndex) as HTMLElement;
    let magicPaddingItem = (window.outerWidth > 767) ? 100 : 30;
    if (currentNavItem){
      this.iconLeftPosition = currentNavItem.offsetLeft + (currentNavItem.offsetWidth - magicPaddingItem) / 2 - 22;
    }
  }

  /**
   * get class for step status from active Id
   * @param id
   * @returns {any}
   */
  getStatus(id){
    let activeStatus = '';
    if (this.activeIndex == id){
      (this.finish) ? this.navItems[id].finish = true : this.navItems[id].finish = false;
      return activeStatus = 'active';
    } else if (this.activeIndex > id){
      return activeStatus = 'passed';
    } else if (this.activeIndex < id){
      if ( (id > 3 && id < 6) || id <= this.lastCompleteStep) {
        return activeStatus = 'unactive available'
      } else if ( (id <= 3 && id >=6) || id > this.lastCompleteStep){
        return activeStatus = 'unactive';
      }
    }
  }

  /**
   * route to passed nav item by click
   * @param e
   * @param id
   * @param hash
   */
  itemNavClick(e, id, hash){
    e.preventDefault();

    let status = this.getStatus(id);

    if (status === 'passed' || (id > 3 && id < 6) || id <= this.lastCompleteStep ){
      this.router.navigate(['/'+hash]);
    }
  }

  /**
   * alert show
   * @param event
   * @param ref
   */
  alertShow(event, ref, faqText){
    if (faqText){
      ref.show(event);
    }
  }

  /**
   * alert hide
   * @param event
   * @param ref
   */
  alertHide(event, ref, faqText){
    if (faqText) {
      ref.hide(event);
    }
  }

}
