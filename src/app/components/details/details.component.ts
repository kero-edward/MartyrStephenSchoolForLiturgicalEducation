import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import copticData from '../../json/data.json';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  letterId?: number;
  letter?: any = {};
  getData: any[] = copticData;
  play: BehaviorSubject<boolean> = new BehaviorSubject(false);
  screenWidth: any;

  audioEnded(): void {
    this.play.next(false);
  }

  constructor(private route: ActivatedRoute) {
    this.getScreenSize();
    this.letterId = this.route.snapshot.params['id'];
    this.letter = this.getData.find((item) => item.id == this.letterId);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    console.log('screenWidth: ', this.screenWidth);
  }

  ngOnInit(): void {}

  playMySong() {
    this.play.next(true);
  }
  pauseMySong() {
    this.play.next(false);
  }
}
