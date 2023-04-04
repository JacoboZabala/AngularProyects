import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input() tituloLibro: string;
  @Output() libroClocked = new EventEmitter();

  OnClicked() {
    this.libroClocked.emit();
  }
}
