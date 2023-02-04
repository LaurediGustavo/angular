import { Component } from '@angular/core';
import { Animal } from 'src/app/class/Animal';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  animal?: Animal;

  constructor(private listServeice: ListService, private rount: ActivatedRoute) {
    this.getAnimal();
  }

  getAnimal(): void {
    const id = Number(this.rount.snapshot.paramMap.get("id"));
    this.listServeice.getItem(id).subscribe(animal => this.animal = animal);
  }

  gravar(): void {
    if(this.animal) {
      this.listServeice.atualizar(this.animal).subscribe();
    }
  }

}
