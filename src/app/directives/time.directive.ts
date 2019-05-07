import { DatePipe } from "@angular/common";
import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
	selector: "time"
})
export class TimeDirective {

	@Input("date") date: Date;
	@Input("format") format: string = "shortDate"; // pass a custom format string
	@Input("noTitle") noTitle: boolean = false;

	constructor(
		private elementRef: ElementRef,
		private datePipe: DatePipe,
	) { }

	/**
	 * Every time the date changes, re-run the logic to render the date properly
	 */
	ngOnChanges() {

		// Parse out date if necessary
		let date = this.date;
		if (typeof date === "string") {
			date = new Date(date);
		}

		// If a valid date
		if (date instanceof Date && !isNaN(date as any)) {
			const str = date.toISOString();
			this.elementRef.nativeElement.innerHTML = this.datePipe.transform(date, this.format);
			this.elementRef.nativeElement.setAttribute("datetime", str);
			if (!this.noTitle) {
				this.elementRef.nativeElement.setAttribute("title", this.datePipe.transform(date, "full", "+0000"));
			}
		} else {
			// If invalid, clear out the element
			this.elementRef.nativeElement.innerHTML = "";
			this.elementRef.nativeElement.setAttribute("datetime", "");
			this.elementRef.nativeElement.setAttribute("title", "");
		}

	}

}