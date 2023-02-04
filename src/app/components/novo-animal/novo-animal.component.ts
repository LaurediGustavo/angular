import { Component } from '@angular/core';
import { Animal } from 'src/app/class/Animal';
import { ListService } from 'src/app/services/list.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent {

  animal: Animal;

  constructor(private listService: ListService) {
    this.animal = new Animal();
  }

  gravar(): void {
      this.listService.gravar(this.animal).subscribe();
  }

}
