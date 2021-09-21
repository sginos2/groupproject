import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  cardData: CardData = {
    state: 'default'
  };
  cardInfo: any;
  cardsArr: any[] = [];
  randomIdx: any;
  randomCard: any;

  constructor(
    private http: HttpClient,
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
      this.cardsArr.push({...this.randomCard});

      //clone randomCard and push clone of random card
      //shallow clone clones first level of keys, deep clone will clone everything
    }
    for (let i = 0; i < this.cardsArr.length; i++) {
      this.cardsArr[i].state = 'default';
    }
  }

  shuffleCards(arr: any) {
    for (let i = arr.length - 1; i > 0; i--) {
        let x = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[x]] = [arr[x], arr[i]];
    }
}

  cardClicked(card: any) {
    if (card.state === "default") {
      card.state = "flipped";
    } else {
      card.state = "default";
    }
  }
}

//match cards on id field