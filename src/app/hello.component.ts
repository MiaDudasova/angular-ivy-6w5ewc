import {
  Component,
  VERSION,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./app.component.css'],
})
export class HelloComponent implements OnChanges {
  @Input() name: string;

  @Input() cislo: number;

  private data: string = 'dummy data';

  getData(): string {
    this.data = this.name;
    return this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes.cislo.currentValue;
  }
}
