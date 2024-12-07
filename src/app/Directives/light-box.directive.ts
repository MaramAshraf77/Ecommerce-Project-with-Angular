import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

  @Input() highLightColor:string="yellow";

  constructor(private elemRef :ElementRef) {
    elemRef.nativeElement.style.border="2px solid darkblue";
  }
  @HostListener('mouseover') onMouseOver()
  {
     this.elemRef.nativeElement.style.border='3px solid ${this.highLightColor}';
  }
  @HostListener('mouseout') onMouseOut()
  {
     this.elemRef.nativeElement.style.border="2px solid darkblue";
  }

}
