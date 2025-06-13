import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor() { }
  @HostBinding('style.backgroudColor') bGColor: string = 'lightblue';

  @HostBinding('class.hovered') isHovered: boolean = false;
  @Input() hoverColor: string = 'lightgreen';

  @HostListener('mouseenter') onHover
  () {
    this.isHovered = true;
    this.bGColor = 'lightgreen';
  }
  @HostListener('mouseleave') onLeave() {
    this.isHovered = false;
  
}
}