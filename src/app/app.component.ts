import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'Gustavo';

  user = {
    name: 'Lauredi',
    email: 'lauredi@gmail.com',
    role: 'adm'
  }

  title = 'inicial';
}
