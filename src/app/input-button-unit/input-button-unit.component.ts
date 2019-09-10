import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <input class ="todo-input" #inputElementRef
         [value]="title"
         (keyup.enter)="submitValue($event.target.value)">

  <button class="btn" (click)="submitValue(inputElementRef.value)">
    Save
  </button>
`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() evsubmit: EventEmitter<string> = new EventEmitter();
title = 'Hello World';
  constructor() {}

  ngOnInit() {
  }
  submitValue(newTitle: string) {
    this.evsubmit.emit(newTitle);
  }
}
