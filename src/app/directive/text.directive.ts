import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText = "Home component";

   }

}




