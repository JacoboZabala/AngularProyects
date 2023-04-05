import { Component } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {

  libros = [''];
  constructor(librosService: LibrosService){
    this.libros = librosService.obtenerLibros();
  }

  eliminarLibro(libro: any){
    this.libros = this.libros.filter( p => p !== libro);
  }

  guardarLibro(f: any){
    if(f.valid){
      this.libros.push(f.value.nombreLibro);
    }
  }
}
