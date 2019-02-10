import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Athlete } from "../models/Athlete";
import { map } from 'rxjs/operators';

@Injectable()
export class AthleteService {
  constructor(private http: Http) { }

  getAthletes() {
    return this.http.get('api/athletes')//.json
      .pipe(map((r: Response) => <Athlete[]>r.json().data));
  }
}
