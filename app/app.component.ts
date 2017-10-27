import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class = "container">
    <animal-list [childAnimalList]="animalList"></animal-list>
  </div>
  `
})

export class AppComponent {
  animalList: Animal[] = [
    new Animal('Harry', 'Hairy Pig', 4, 'slop', 'pigpen', 1, 'male', 'poopin', 'movin')
  ]
  debugger;
}
