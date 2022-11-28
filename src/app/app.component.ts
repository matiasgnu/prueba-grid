import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuColapsado = false;
  mostrarModalDerecho = false;

  onAlternarMenu() {
    this.menuColapsado = !this.menuColapsado;
    console.log(this.menuColapsado)
  }
}
