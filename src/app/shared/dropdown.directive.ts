import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appDropDown]"
})
export class AppDropDownDirective {
  @HostBinding("class.show")
  isOpen = true;
  @HostListener("click")
  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
