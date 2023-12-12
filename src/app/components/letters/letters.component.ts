import { Component, OnInit } from '@angular/core';
import copticData from '../../json/data.json';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit {
  copticLetters: any[] = copticData;

  constructor() {}

  ngOnInit(): void {}
}
