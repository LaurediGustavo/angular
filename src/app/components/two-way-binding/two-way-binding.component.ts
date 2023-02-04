import { Component } from '@angular/core';
import { Animal } from 'src/app/class/Animal';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  animal:Animal = new Animal();
  retorno:Boolean = false;

  validarDados(): void {
    this.retorno = true;

    if(this.animal.name == null || this.animal.name === '') {
      this.retorno = false;
    }

    if(this.animal.type == null || this.animal.type === '') {
      this.retorno = false;
    }

    if(this.animal.age == null || this.animal.age == 0) {
      this.retorno = false;
    }
    
  }

  limpar(): void {
    this.animal = new Animal();
    this.validarDados();
  }

}
