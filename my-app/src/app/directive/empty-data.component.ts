import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[emptyData]'
})
export class EmptyDataComponent implements OnInit{
  @Input() emptyData: string;

  constructor(private el: ElementRef){
  }

  ngOnInit(){
    if(!this.emptyData){
      this.el.nativeElement.innerHTML = 'Empty';
    } else{
      this.el.nativeElement.innerHTML = this.emptyData;
    }
  }
}
