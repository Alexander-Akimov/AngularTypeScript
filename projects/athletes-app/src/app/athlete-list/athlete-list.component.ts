import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AthleteService } from '../services/athlete.service';
import { Athlete } from '../models/Athlete';

@Component({
  selector: 'app-athlete-list',
  //templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.less'],
  template: `
  <ol>
    <li *ngFor="let athlete of athletes">
      <app-athlete [athlete]="athlete" (click)="select(athlete)">
      </app-athlete>
    </li>
  </ol>`,
  providers: [AthleteService]
})//
export class AthleteListComponent implements OnInit {
  athletes: Array<Athlete>;
  @Output() selected = new EventEmitter<Athlete>();

  constructor(private athleteService: AthleteService) { }

  getAthletes() {
    this.athleteService.getAthletes()
      .subscribe(athletes => this.athletes = athletes);
  }

  select(selectedAthlete: Athlete) {
    this.selected.emit(selectedAthlete);
  }

  ngOnInit() { 
    this.getAthletes();
  }
}