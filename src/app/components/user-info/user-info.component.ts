import { Component, OnInit } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore"; 


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

