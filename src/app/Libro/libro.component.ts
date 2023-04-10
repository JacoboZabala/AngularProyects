import { Component, Input, EventEmitter, Output } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input() tituloLibro: string;
  @Output() libroClocked = new EventEmitter();

  constructor(private librosService: LibrosService){

  }

  OnClicked() {
    //this.libroClocked.emit();
    this.librosService.eliminarLibro(this.tituloLibro);
  }
}
