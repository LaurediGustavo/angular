import { Component, ViewChild } from '@angular/core';

import { Animal } from 'src/app/class/Animal';
import { ListService } from 'src/app/services/list.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [];
  animalDetails: String = ''; 
  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal;
  animalSelecionada!: Animal;

  constructor(private listService: ListService,
              private bsModalService: BsModalService) {
    this.getAnimals();  
  }

  getAnimals(): void {
    this.listService.getAll().subscribe(animals => this.animals = animals);
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.animals.filter(a => a.name !== animal.name);
    this.listService.remove(animal.id).subscribe();
  }

  onDelete(animal: Animal): void {
    this.animalSelecionada = animal;
    this.deleteModalRef = this.bsModalService.show(this.deleteModal, { class:'modal-sm' });
  }

  onConfirmDelete(): void {
    this.removeAnimal(this.animalSelecionada);
    this.deleteModalRef.hide();
  }

  onDeclineDelete(): void {
    this.deleteModalRef.hide();
  }

}
