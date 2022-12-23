import {Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDirectiveTwo]'
})
export class DirectiveTwoDirective{

  constructor(public element: ElementRef , public renderer: Renderer2) {
    this.element.nativeElement.style.borderRadius = '20px';
    this.element.nativeElement.style.letterSpacing = '1px';
  }

  @HostListener('click') textBackground():  void{
    this.changeBackground('black' , '5px' , 'white')
  }

  private changeBackground(valBackground: string , valPadding: string , valColor: string) {
    this.renderer.setStyle(this.element.nativeElement , 'background' , valBackground);
    this.renderer.setStyle(this.element.nativeElement , 'padding' , valPadding);
    this.renderer.setStyle(this.element.nativeElement , 'color' , valColor);
  }

  @HostBinding('style.cursor') get funcCursor() {
    return 'pointer';
  }
}
