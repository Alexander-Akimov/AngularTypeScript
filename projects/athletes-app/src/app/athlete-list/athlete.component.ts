import { Component, OnInit, Input } from '@angular/core';
import { Athlete } from '../models/Athlete';

@Component({
  selector: 'app-athlete',
  template: `{{athlete.name}}({{athlete.country}}): {{athlete.time}}`,
  styles: []
})
export class AthleteComponent implements OnInit {
  @Input() athlete: Athlete;
  constructor() { }

  ngOnInit() {
  }

}
