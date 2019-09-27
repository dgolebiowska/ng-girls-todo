import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
      <input
        class="todo-input"
        #inputElementRef
        [value]="title"
        (keyup.enter)="submitValue($event.target.value)"
      >
      <button
        mat-raised-button
        color="primary"
        (click)="submitValue(inputElementRef.value)"
      >
        Save
      </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Input() title: string;
  @Output() evsubmit: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.title = 'Hello World';
  }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.evsubmit.emit(newTitle);
  }

}
