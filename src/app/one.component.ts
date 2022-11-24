import { Component, VERSION } from '@angular/core';
import { ClickService } from './click.service';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  pocet: number = 0;

  public constructor(public clickService: ClickService) {}

  onClick(): void {
    this.pocet = this.pocet + 1;
    this.clickService.addClick();
    console.log('Pocet klikov:' + this.clickService.getCelkovyPocet());
  }
}
