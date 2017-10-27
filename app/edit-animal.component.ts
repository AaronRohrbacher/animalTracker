import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>{{childSelectedAnimal.name}}</h3>
    <input [(ngModel)]="childSelectedAnimal.name">
    <input [(ngModel)]="childSelectedAnimal.species">
    <input [(ngModel)]="childSelectedAnimal.age">
    <input [(ngModel)]="childSelectedAnimal.diet">
    <input [(ngModel)]="childSelectedAnimal.location">
    <input [(ngModel)]="childSelectedAnimal.caretakers">
    <input [(ngModel)]="childSelectedAnimal.sex">
    <input [(ngModel)]="childSelectedAnimal.likes">
    <input [(ngModel)]="childSelectedAnimal.dislikes">
    <button (click)="doneButton()">Done Editing</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonSender = new EventEmitter();

  doneButton() {
    this.doneButtonSender.emit()
  }
}
