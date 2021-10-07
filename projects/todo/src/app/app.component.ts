import { Component } from '@angular/core';
import { Model, TodoItem } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  model: Model = new Model();
  getName() {
    return this.model.user;
  }
  getTodoItems() {
    return this.model.items.filter((item: TodoItem) => !item.done);
  }
  addItem(newItem: string) {
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }
}