import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective implements OnInit {
  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.min = 0;
  }
}

