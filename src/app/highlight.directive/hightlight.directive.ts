import { Directive, ElementRef, OnInit, HostListener } from "@angular/core";

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: "[appBasicHighLight]"
})
export class AppHighLightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
