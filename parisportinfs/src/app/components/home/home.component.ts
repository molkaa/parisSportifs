import { ParisSportifsService } from '../../services/paris-sportifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leagues: string[];
  allAvailableLeagues: string[];
  selectedLeague: any;
  constructor(private parisService: ParisSportifsService) {}

  ngOnInit() {
    this.allAvailableLeagues = [];
    this.parisService.getAllLeagues().subscribe((res) => {
      res.leagues.forEach(element => {
        this.allAvailableLeagues.push(element.strLeague);
      });
    });
  }

  search(event) {
    this.leagues = [];
    this.allAvailableLeagues.forEach(el => {
      const lg = el;
      if (lg.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.leagues.push(lg);
      }
    });
  }
}
