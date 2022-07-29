import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
})
export class BackgroundColorDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'lightblue';
  }
}
