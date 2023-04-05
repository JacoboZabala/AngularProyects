export class LibrosService{
  private libros = ['Libro 1', 'Libro 2', 'Libro 3']

  agregarLibro(libroNombre: any){
    this.libros.push(libroNombre);
  }

  obtenerLibros(){
    return [...this.libros];
  }
}
