import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class = "container">
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
      <tbody id="results">
        <tr *ngFor="let animal of animalList">
          <td> {{animal.species}} </td>
          <td> {{animal.name}} </td>
          <td> {{animal.age}} </td>
          <td> {{animal.diet}} </td>
          <td> {{animal.location}} </td>
          <td> {{animal.caretakers}} </td>
          <td> {{animal.sex}} </td>
          <td> {{animal.likes}} </td>
          <td> {{animal.dislikes}} </td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})

export class AppComponent {
  animalList: Animal[] = [
    new Animal('Harry', 'Hairy Pig', 4, 'slop', 'pigpen', 1, 'male', 'poopin', 'movin')
  ]
  debugger;
}
