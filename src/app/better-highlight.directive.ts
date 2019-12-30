import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private refEl: ElementRef, private render: Renderer2) {}
  @Input()
  appBetterHighlight = "transparent";
  @Input()
  secondColor = "green";

  @HostBinding("style.backgroundColor")
  backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = this.appBetterHighlight;
  }
  @HostListener("mouseenter")
  mouseEnter() {
    // this.render.setStyle(this.refEl.nativeElement, "background-color", "green");
    this.backgroundColor = this.appBetterHighlight;
  }

  @HostListener("mouseleave")
  mouseLeave() {
    // this.render.setStyle(
    //   this.refEl.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.secondColor;
  }
}
