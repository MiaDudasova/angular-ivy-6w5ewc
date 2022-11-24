import { Component, VERSION, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Input()
  inputPremenna: string = '';

  @Input()
  inputZlozity: ZlozityInput = { name: 'name', value: 1 };

  @Output()
  dataVon: EventEmitter<ZlozityInput> = new EventEmitter<ZlozityInput>();

  emitujData(): void {
    this.dataVon.emit({ name: 'emitovane', value: 911 });
  }
}

export interface ZlozityInput {
  name: string;
  value: number;
}
