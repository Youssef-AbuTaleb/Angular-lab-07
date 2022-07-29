import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
})
export class TextColorDirective {
  @Input() appTextColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = this.appTextColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = '';
  }

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    // this.element.nativeElement.style.color = this.appTextColor;
  }
}
