import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>Editing {{childSelectedAnimal.name}}</h3>
    <label>Name:</label>
    <input [(ngModel)]="childSelectedAnimal.name">
    <label>Species:</label>
    <input [(ngModel)]="childSelectedAnimal.species">    <label>Age:</label>
    <input [(ngModel)]="childSelectedAnimal.age">    <label>Diet:</label>
    <input [(ngModel)]="childSelectedAnimal.diet">
    <label>Location:</label>
    <input [(ngModel)]="childSelectedAnimal.location">
    <label>Caretakers:</label>
    <input [(ngModel)]="childSelectedAnimal.caretakers">
    <label>Sex:</label>
    <input [(ngModel)]="childSelectedAnimal.sex">
    <label>Likes:</label>
    <input [(ngModel)]="childSelectedAnimal.likes">
    <label>Dislikes:</label>
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
