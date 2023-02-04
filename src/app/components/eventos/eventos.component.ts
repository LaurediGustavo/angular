import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show:Boolean = true;
  color:String = 'black';

  showMessage() : void {
    this.show = !this.show; //toggle
  }

  mudarCor() : void {
    this.color = 'blue';
  }

  mudarCorBlack() : void {
    this.color = 'black';
  }

}
