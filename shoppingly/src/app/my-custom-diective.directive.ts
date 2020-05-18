import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyCustomDiective]'
})
export class MyCustomDiectiveDirective {
  @Input('appMyCustomDiective') format: String;
  @Input('Case') Case: String;
  @HostListener ('focus') onFocus() {
    this.el.nativeElement.value = '';
  }
  @HostListener ('blur') onBlur() {
    const inputText: String  = this.el.nativeElement.value;
    if (this.format === 'upper') {
      this.el.nativeElement.value = inputText.toUpperCase() ;
    } else {
      this.el.nativeElement.value = inputText.toLowerCase() ;
    console.log(inputText);
    }

    if (this.Case === 'lower'){
      this.el.nativeElement.value = inputText.toLowerCase();
    }
  }

  constructor(private el: ElementRef) { }

}
