import { Observable } from 'rxjs';
import { Team } from '../models/Team.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { League } from '../models/League.model';

@Injectable({
  providedIn: 'root'
})
export class ParisSportifsService {

  uri = 'https://www.thesportsdb.com/api/v1/json/1';
  constructor(private http: HttpClient) { }

  public getAllLeagues(): Observable<any> {
    return this.http.get(`${this.uri}/all_leagues.php`);
  }

  public getTeamsByLeagueName(leagueName: string): Observable<any> {
    const params = new HttpParams().set('l', leagueName);
    return this.http.get(`${this.uri}/search_all_teams.php`, {params});
  }

  public getPlayersByTeamId(id_team: string): Observable<any> {
    const params = new HttpParams().set('id', id_team);
    return this.http.get(`${this.uri}/lookup_all_players.php`, {params});
  }


}

