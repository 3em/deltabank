import { Component, OnInit, Input, HostListener } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  headerStatusFull: boolean = false;
  windowWidth: number = window.innerWidth;
  activeTab: number = 0;
  hash: string;
  hideText: boolean = false;

  /**
   * set width for blur bg
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => {
      this.hash = res.id;
      this.activateTabEnter();
    })
  }

  /**
   * change row parameter
   * @param event
   */
  handleChange(event){
    if (event.index == 0){
      this.router.navigate(['login/registration']);
      this.hideText = false;
      this.activeTab = 0;
    } else {
      this.router.navigate(['login/enter']);
      this.hideText = true;
      this.activeTab = 1;
    }

  }

  /**
   * activate tab enter on hash change
   */
  activateTabEnter(){
    if (this.hash && this.hash == 'enter'){
      this.activeTab = 1;
      this.hideText = true;
    }
  }

  ngOnInit() {
    this.activateTabEnter();
  }

}
