import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetupComponent } from '../setup/setup.component';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.css']
})
export class CardMatchComponent implements OnInit {

  selectedSet: any;
  cards: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.selectedSet = this.route.snapshot.paramMap.get('setName');
    this.http.get(`https://api.pokemontcg.io/v2/cards?q=set.name:${this.selectedSet}`)
    .subscribe((data: any) => {
      this.cards = data.data; 
    })
  }

  /* 
  API:
  1. Get sets to popluate set dropdown selection
    Http requests can be found in Postman. Pokemon > Get sets 
    - GET https://api.pokemontcg.io/v2/sets

  2. Save user selections to a selections object
     example:
     userSelections = {
       matches: 8, 
       set: "base", 
       players: ["userId1", "userId2"]
      };

  3. Use set name stored in selections object to populate query parameters for the get cards api call
    Postman: Pokemon > Get Cards by Deck Name
    - GET https://api.pokemontcg.io/v2/cards?q=set.name:<set name from selections object>

  4. Use the match number from the user selections object to select a random selection of cards. e.g. if matches is set to 8 
     select 8 random cards from the response from section 3. 

  5. Duplicate every card object in your card array. e.g. If 8 matches was selected then you'll want to duplicate the 8 cards
     from step 4 by 2. 

  6. Match cards on the id field.
     
  */


}
