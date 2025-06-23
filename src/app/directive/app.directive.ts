import { Directive, ElementRef, HostListener, Renderer2,HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appApp]'
})
export class AppDirective implements OnInit{
@Input() backgroundcolor = "";
  constructor(private element:ElementRef,private  renderer:Renderer2) {
   
    // element.nativeElement.classList.add('succes');
// renderer.setStyle(element.nativeElement, 'backgroudColor', "red");

   }
  //  @HostListener('click')
  //  onClick(){
  //   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'backgroundcolor')
  //  }
  // @HostBinding('textContent') text = "Hello World";
  ngOnInit(): void{
  this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backgroundcolor)
  this.renderer.setStyle(this.element.nativeElement, 'height', '120px')
  this.renderer.setStyle(this.element.nativeElement, 'width', '130px')
  this.renderer.setStyle(this.element.nativeElement, 'border-radius', '5px')
  this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid black')
  this.renderer.setStyle(this.element.nativeElement, 'margin', '5px')
}
}

