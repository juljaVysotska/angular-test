import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [CardComponent], // all modules that used internally
    exports: [CardComponent] // all module that used externally
})

export class SharedModule {

}