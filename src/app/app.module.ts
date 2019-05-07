import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BooleanToYesNoComponent } from "./components/boolean-to-yes-no/boolean-to-yes-no.component";
import { TimeDirective } from "./directives/time.directive";


@NgModule({
	declarations: [
		BooleanToYesNoComponent,
		TimeDirective
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: []
})
export class AppModule { }
