import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private contRef: ViewContainerRef
  ) {}

  @Input("appUnless") set appUnless(condition) {
    if (!condition) {
      this.contRef.createEmbeddedView(this.templateRef);
    } else {
      this.contRef.clear();
    }
  }
}
