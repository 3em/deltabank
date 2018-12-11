import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() statusShow: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    (this.statusShow) ? this.document.body.classList.add('overflow') : this.document.body.classList.remove('overflow');
  }



}
