import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.css']
})
export class CardMatchComponent implements OnInit {

  pokemonCard: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get('https://api.pokemontcg.io/v2/cards/xy1-1')
    // .subscribe(data => {
    //   Object.entries(data).map(entry => {
    //     this.pokemonCard = entry[1].images.small;
    //   })
    //   console.log(this.pokemonCard);
    // })
  }

}
