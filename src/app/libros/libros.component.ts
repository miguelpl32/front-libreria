import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: 'libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  // libros = ['Matematica 1', 'Algoritmos 2', 'Algebra 3'];

  libros = [];
  constructor(private librosService: LibrosService) {}
  private libroSubscription: Subscription;

  ngOnInit() {
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy() {
    this.libroSubscription.unsubscribe();
  }

  eliminarLibro(libro) {
    // this.libros = this.libros.filter((p) => p !== libro);
  }

  guardarLibro(f) {
    if (f.valid) {
      // this.libros.push(f.value.nombreLibro);
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }
}
