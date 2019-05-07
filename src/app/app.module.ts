import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BooleanToYesNoComponent } from "./components/boolean-to-yes-no/boolean-to-yes-no.component";


@NgModule({
	declarations: [
		BooleanToYesNoComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: []
})
export class AppModule { }
