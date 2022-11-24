import {
  AfterViewInit,
  Component,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';
import { ZlozityInput } from './component/test.component';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  // dataZlozite: ZlozityInput = { name: 'meno', value: 9 };

  // // items: any = new Array(100);
  // // items: number[] = [1,2,3,4];
  // // items: string[] = ["abc", "bcd", "cde", "def"];
  // items: string[][] = [
  //   ['1a', 'prvy'],
  //   ['2b', 'druhy'],
  //   ['3b', 'treti'],
  //   ['4a', 'stvrty'],
  // ];

  // studenti: Student[] = [
  //   { meno: 'Jano', prijem: 1000 },
  //   { meno: 'Vlado', prijem: 600 },
  // ];

  // listik: any = new Array(Math.floor(Math.random() * 10));

  // expression: string = 'abc';

  // getArray(): any {
  //   return this.listik;
  // }

  // getExpression(): string {
  //   return this.expression;
  // }

  // isClicked: boolean = false;

  // onButtonClick(): void {
  //   console.log('Click!');
  //   console.log(this.isClicked);
  //   this.isClicked = !this.isClicked;
  //   console.log(this.isClicked);
  // }

  // getIsClicked(): boolean {
  //   return this.isClicked;
  // }

  // onEvent(event: ZlozityInput): void {
  //   this.name = event.name;
  // }

  name = 'Angular ' + VERSION.major;
  data: string = '';
  cislo: number = 0;

  @ViewChild('druhy')
  hello: HelloComponent;

  onClick(): void {
    this.data = this.hello.getData();

    this.cislo = 456;
  }

  ngOnInit(): void {
    console.log('oninit');
  }

  ngAfterViewInit(): void {
    console.log('afterviewinit');
  }
}

// export interface Student {
//   meno: string;
//   prijem: number;
// }
