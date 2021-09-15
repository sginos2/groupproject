import { Component, OnInit } from '@angular/core';

interface Set {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
