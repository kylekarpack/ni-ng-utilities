import { Component, Input } from "@angular/core";

@Component({
	selector: "ni-boolean-to-yes-no",
	template: `
		<ng-container [ngSwitch]="input">
			<ng-container *ngSwitchCase="true" i18n>Yes</ng-container>
			<ng-container *ngSwitchCase="false" i18n>No</ng-container>
		</ng-container>
  	`
})
export class BooleanToYesNoComponent {

	@Input("input") input: boolean;

}
