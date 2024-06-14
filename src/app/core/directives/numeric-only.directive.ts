import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumericOnly]'
})
export class NumericOnlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: KeyboardEvent) {
    const input = this.el.nativeElement;
    const sanitizedValue = input.value.replace(/[^0-9]/g, '');
    if (input.value !== sanitizedValue) {
      input.value = sanitizedValue;
      event.stopPropagation();
    }
  }
}
