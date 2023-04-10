import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit{

  libros = [''];
  constructor(private librosService: LibrosService){

  }

  eliminarLibro(libro: any){
    this.libros = this.libros.filter( p => p !== libro);
  }

  guardarLibro(f: any){
    if(f.valid){
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros();
    this.librosService.librosSubject.subscribe( () => {
      this.libros = this.librosService.obtenerLibros();
    });
  }
}
