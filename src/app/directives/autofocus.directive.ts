import { Directive, ElementRef, Input } from "@angular/core";

// Improve autofocus
@Directive({
	selector: "[autofocus]"
})
export class AutofocusDirective {
	private focus = true;

	constructor(private el: ElementRef) { }

	/**
	 * Initialize autofocus logic
	 */
	ngOnInit() {
		if (this.focus) {
			// Otherwise Angular throws error: Expression has changed after it was checked.
			window.setTimeout(() => {
				this.el.nativeElement.focus();
			});
		}
	}

	@Input() set autofocus(condition: boolean) {
		this.focus = condition !== false;
	}
}