import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskDialogComponent } from "./new-task-dialog/new-task-dialog.component";
// import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../../shared/card.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
// import { SharedModule } from "../../shared/card.module";

@NgModule({
    declarations: [TaskComponent, TasksComponent, NewTaskDialogComponent,],
    exports: [TasksComponent],
    imports: [CommonModule, SharedModule, FormsModule]
})

export class TasksModule {

}