import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(click)': 'select()',
  }
})
export class HighlightDirective {
  @Input() elements: any;
  private el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el
  }

  select() {
    this.el.nativeElement.style.background = 'yellow';
  }

  unSelect() {
    this.el.nativeElement.style.background = 'white';
  }
}
