import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[emptyData]'
})
export class EmptyDataDirective implements OnInit{
  @Input() emptyData: string;

  constructor(private e: ElementRef){
  }

  ngOnInit(){
    if(!this.emptyData){
      this.e.nativeElement.innerHTML = 'Empty';
    } else{
      this.e.nativeElement.innerHTML = this.emptyData;
    }
  }
}