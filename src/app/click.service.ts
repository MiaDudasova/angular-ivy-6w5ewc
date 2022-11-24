import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClickService {
  celkovyPocet: number = 0;

  addClick(): void {
    this.celkovyPocet = this.celkovyPocet + 1;
  }

  getCelkovyPocet(): number {
    return this.celkovyPocet;
  }
}
