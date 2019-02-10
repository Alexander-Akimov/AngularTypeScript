import { Component } from '@angular/core';
import { Athlete } from './models/Athlete';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: []
})

export class AppComponent {
  title = 'my-app1';
  color = "red";//'#ffddee';
  array = [{ id: 2, name: "Alex" }, { id: 5, name: "James" }];
  selectedAthlete: string;

  constructor() {
    this.selectedAthlete = "none";
  }

  showDetails(selectedAthlete: Athlete) {
    this.selectedAthlete = selectedAthlete.name;
  }

  setColor() {
    if (this.color === "")
      this.color = "red";
    else
      this.color = "";
  }

  addItem() {
    let item = { id: 3, name: "test" }
    this.array.push(item);
  }

  removeItem() {
    this.array.pop();
  }
}
