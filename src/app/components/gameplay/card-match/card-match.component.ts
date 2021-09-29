import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameService } from '../../../services/game.service';

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
        transform: 'none',
      })),
      state('flipped', style({
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('matched', style({
        visibility: 'false',
        transform: 'scale(0.05)',
        opacity: 0
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('400ms')
      ]),
      transition('* => matched', [
        animate('400ms')
      ])
    ])
  ]
})
export class CardMatchComponent implements OnInit {

  cards: any;
  cardData: CardData = {
    state: 'default'
  };
  cardInfo: any;
  cardsArr: any[] = [];
  randomIdx: any;
  randomCard: any;
  flippedCards: any[] = [];
  cardStates: any;
  matchCount = 0;

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    public game: GameService
    ) { }

  ngOnInit(): void {
    this.game.getUserSelections();
    this.http.get(`https://api.pokemontcg.io/v2/cards?q=set.id:${this.game.selectedSet}`)
    .subscribe((data: any) => {
      this.cards = data.data;
      this.randomizeCards(this.cards, this.game.matchNum); 
      this.shuffleCards(this.cardsArr);
    })
  }

  randomizeCards(arr: any, num: number) {
    let existingNumbers: any[] = [];
    for (let i = 0; i < num; i++) {
      do {
        this.randomIdx = Math.floor(Math.random() * arr.length);
      } while(existingNumbers.includes(this.randomIdx));
      existingNumbers.push(this.randomIdx);
      this.randomCard = arr[this.randomIdx];
      this.cardsArr.push(this.randomCard);
      this.cardsArr.push({...this.randomCard});
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
    if (card.state === 'default' && this.flippedCards.length < 3) {
      card.state = 'flipped';
      this.flippedCards.push(card);
      if (this.flippedCards.length > 1) {
        setTimeout(() => {this.checkForCardMatch()}, 1000);
      }
    } 
    else if (card.state === 'flipped') {
      card.state = 'default';
      this.flippedCards.pop();
    }
  }

  checkForCardMatch() {
    if (this.flippedCards[0].id === this.flippedCards[1].id) {
      this.flippedCards[1].state = 'matched';
      this.flippedCards[0].state = 'matched';
      this.flippedCards = [];
      this.game.currentPlayer.score++;  //will turn into player's score
      this.game.matchNum--;
      if (this.game.matchNum === 0) {
        clearInterval(this.game.timerInterval);
        clearInterval(this.game.rotateInterval);
        this.gameOverMsg();
      }
    } else {
      this.flippedCards[1].state = 'default';
      this.flippedCards[0].state = 'default';
      this.flippedCards = [];
    }
  }

  gameOverMsg() {
    this.game.findWinner();
    this.snackbar.open(`All matches found! Winner: ${this.game.winner}`, 'Close');
  }

}


//when game completes, increment variable called gamesPlayed, variable for winner, array for losers, 
//variable for games won, variable for games lost yulissa will deal with pushing to database