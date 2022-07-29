import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appRepeatElement]',
})
export class RepeatElementDirective {
  @Input() appRepeatElement: number = 0;
  constructor(private tref: TemplateRef<any>, private vref: ViewContainerRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    for (let i = 0; i < this.appRepeatElement; i++) {
      this.vref.createEmbeddedView(this.tref, { index: i });
    }
  }
}
