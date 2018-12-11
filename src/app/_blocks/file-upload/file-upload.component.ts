import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, AfterViewInit {

  @ViewChild('titleId') titleId: ElementRef;
  uploadedFiles: any[] = [];
  @Input() chooseTextLabel: string;
  @Input() uploadClass: string;
  @Input() title: string;
  minHeightUploadBox: string = '0px';
  statusSelected: boolean = false;

  @Output() onSelectFunc = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.uploadBoxTitle();
    });
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.uploadBoxTitle();
    });
  }

  myUploader(event) {
  }


  onSelect(event){
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
    if (this.uploadedFiles.length > 0){
      this.onSelectFunc.emit(true);
    }
  }

  onRemove(event){
    let filteredUploadedFiles = this.uploadedFiles.filter(function (el) {
      return (el.name !== event.file['name'] && el.size !== event.file['size'])
    });
    this.uploadedFiles = filteredUploadedFiles;
    if (this.uploadedFiles.length == 0){
      this.onSelectFunc.emit(false);
    }
  }

  onResizeTitle(event){
    this.uploadBoxTitle();
  }

  uploadBoxTitle(){
    if (this.title && this.titleId.nativeElement){
      let width = this.titleId.nativeElement.offsetHeight + 15;
      this.minHeightUploadBox = width + 'px';
    }
  }
}
