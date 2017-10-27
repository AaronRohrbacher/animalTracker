import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class = "container">
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    <animal-list [childAnimalList]="animalList"></animal-list>
  </div>
  `
})

export class AppComponent {
  animalList: Animal[] = [
    new Animal('Harry', 'Hairy Pig', 4, 'slop', 'pigpen', 1, 'male', 'poopin', 'movin')
  ]

  addAnimal(animal: Animal) {
    this.animalList.push(animal);
  }
}
