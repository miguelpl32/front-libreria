import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../../seguridad/seguridad.service';

@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css'],
})
export class MenuListaComponent implements OnInit, OnDestroy {
  @Output() menuToggle = new EventEmitter<void>();

  estadoUsuario: boolean;
  usuarioSubscription: Subscription;

  constructor(private seguridadService: SeguridadService) {}

  ngOnInit(): void {
    this.usuarioSubscription = this.seguridadService.seguridadCambio.subscribe(
      (status) => {
        this.estadoUsuario = status;
      }
    );
  }

  onCerrarMenu(): void {
    this.menuToggle.emit();
  }
  terminarSesionMenu(): void {
    this.onCerrarMenu();
    this.seguridadService.salirSesion();
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe();
  }
}
