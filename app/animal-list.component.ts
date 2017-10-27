import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="rangeChange($event.target.value)">
    <option value ="all">All Animals</option>
    <option value ="young">Young Animals</option>
    <option value ="old">Mature Animals</option>
  </select>
  <table class="table">
    <thead>
      <tr>
        <th>Species</th>
        <th>Name</th>
        <th>Age</th>
        <th>Diet</th>
        <th>Location</th>
        <th>Caretakers</th>
        <th>Sex</th>
        <th>Likes</th>
        <th>Dislikes</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let animal of childAnimalList | age: range">
        <td> {{animal.species}} </td>
        <td> {{animal.name}} </td>
        <td> {{animal.age}} </td>
        <td> {{animal.diet}} </td>
        <td> {{animal.location}} </td>
        <td> {{animal.caretakers}} </td>
        <td> {{animal.sex}} </td>
        <td> {{animal.likes}} </td>
        <td> {{animal.dislikes}} </td>
        <td><button (click)="editButton(animal)">Edit</button>
      </tr>
    </tbody>
  </table>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  range: string = "all"
  animalList: Animal[] = [
    new Animal('Harry', 'Hairy Pig', 4, 'slop', 'pigpen', 1, 'male', 'poopin', 'movin')
  ]

  editButton(animal) {
    this.clickSender.emit(animal);
  }

  rangeChange(range) {
    this.range = range;
  }
}
