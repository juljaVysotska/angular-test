import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/card.module";
import { TasksModule } from "./components/tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent, ], // for module components
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, SharedModule, TasksModule] // for standalone components but also for other modules
})

export class AppModule {

}