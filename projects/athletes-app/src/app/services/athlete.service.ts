import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Athlete } from "../models/Athlete";
import { map } from 'rxjs/operators';

@Injectable()
export class AthleteService {
  constructor(private http: HttpClient) { }

  getAthletes(): Observable<Athlete[]> {
    return this.http.get<Athlete[]>('api/athletes');//.json
      //.pipe(map((r: Response) => <Athlete[]>r.json().data));
  }
}
