import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface CardData {
  state: 'default' | 'flipped' | 'matched';
}

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class CardMatchComponent implements OnInit {

  retrievedUserSelections: any;
  userSelections: any;
  selectedSet: any;
  matchNum: any;
  cards: any;
  data: CardData = {
    state: "default"
  };
  cardsArr: any[] = [];
  randomIdx: any;
  randomCard: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.retrievedUserSelections = localStorage.getItem('userSelections');
    this.userSelections = JSON.parse(this.retrievedUserSelections);
    this.selectedSet = this.userSelections.set;
    this.matchNum = this.userSelections.matchesNum;
    this.http.get(`https://api.pokemontcg.io/v2/cards?q=set.id:${this.selectedSet}`)
    .subscribe((data: any) => {
      this.cards = data.data;
      this.randomizeCards(this.cards, this.matchNum); 
      this.shuffleCards(this.cardsArr);
    })
  }

  randomizeCards(arr: any, num: number) {
    for (let i = 0; i < num; i++) {
      this.randomIdx = Math.floor(Math.random() * arr.length);
      this.randomCard = arr[this.randomIdx];
      this.cardsArr.push(this.randomCard);
      this.cardsArr.push(this.randomCard);
    }
  }

  shuffleCards(arr: any) {
    for (let i = arr.length - 1; i > 0; i--) {
        let x = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[x]] = [arr[x], arr[i]];
    }
}

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}

//match cards on id field