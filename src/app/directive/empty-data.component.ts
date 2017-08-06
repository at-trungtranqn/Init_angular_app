import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[emptyData]'
})
export class EmptyDataComponent implements OnChanges{
  @Input() emptyData: string;

  constructor(private el: ElementRef){
  }

  ngOnChanges(){
    if(!this.emptyData){
      this.el.nativeElement.innerHTML = 'Empty';
       
    } else{
      this.el.nativeElement.innerHTML = this.emptyData;
       
    }
  }
}
