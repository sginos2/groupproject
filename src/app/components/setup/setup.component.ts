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
  selectedSet: any;
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
      set: this.selectedSet
    }
    console.log(this.selectedSet);
    this.router.navigate([`./match/${this.selectedSet}`]);
  }

  //on startGame() function, save selections to an array

}
