import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-molar-mass',
  templateUrl: './molar-mass.component.html',
  styleUrls: ['./molar-mass.component.css']
})
export class MolarMassComponent implements OnInit {

  formula: string;
  mass: number;

  constructor() { }

  ngOnInit() {
  }

}
