import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
@Component({
  selector: 'new-animal',
  template: `
  <button class="btn btn-success" (click)="enableNewAnimal()">Add New Animal</button>
  <div *ngIf="newAnimal">
    <p>Add an animal:</p>
    <label>Name:</label>
    <input #name>
    <label>Species:</label>
    <input #species>
    <label>Age:</label>
    <input #age>
    <label>Diet:</label>
    <input #diet>
    <label>Location:</label>
    <input #location>
    <label>Number of caretakers:</label>
    <input #caretakers>
    <label>Sex:</label>
    <input #sex>
    <label>Likes:</label>
    <input #likes>
    <label>Dislikes:</label>
    <input #dislikes>
    <button (click)="submitForm(name.value, species.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value); name.value =''; species.value = ''; age.value = ''; diet.value =''; location.value =''; caretakers.value =''; sex.value =''; likes.value =''; dislikes.value = ''; newAnimal = null;">Add Animal</button>
  </div>
  `
})

export class NewAnimalComponent {
  newAnimal: string = null;
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    let newAnimal: Animal = new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes)
    this.newAnimalSender.emit(newAnimal);
  }

  enableNewAnimal(){
    this.newAnimal = "sup"
  }
}
