import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {
  libros = ['Libro1' , 'Libro2' , 'Libro3'];

  eliminarLibro(libro: any){
    this.libros = this.libros.filter( p => p !== libro);
  }
}
