import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  sets: any;
  selectedMatchNum: any;
  selectedSet: any;
  selectedPlayers: any;
  userSelections: any;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.http.get('https://api.pokemontcg.io/v2/sets')
    .subscribe((data: any) => {
      this.sets = data.data;
    })
  }

  startGame() {
    this.userSelections = {
      matchesNum: this.selectedMatchNum,
      set: this.selectedSet
    }
    localStorage.setItem('userSelections', JSON.stringify(this.userSelections));
    this.router.navigate(['./match']);
  }
}
