import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})

export class usuarioComponent{
  usuarioNombre = '';
  usuarios = ['Juan' , 'Jacobo' , 'Zabala'];
  visible = false;

  constructor(){
    setTimeout(() => {
      this.visible = true;
    }, 3000);
  }

  onAgregarUsuario(){
    this.usuarios.push(this.usuarioNombre);
  }
}
