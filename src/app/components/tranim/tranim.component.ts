import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tranim',
  templateUrl: './tranim.component.html',
  styleUrls: ['./tranim.component.scss'],
})
export class TranimComponent implements OnInit {
  play: BehaviorSubject<boolean> = new BehaviorSubject(false);

  audioEnded(): void {
      this.play.next(false);
  }
  
  constructor() {}

  ngOnInit(): void {}

  playMySong() {
    this.play.next(true);
  }
  pauseMySong() {
    this.play.next(false);
  }
}
