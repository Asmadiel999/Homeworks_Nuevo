import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GestionPacientes } from './gestion-pacientes/gestion-pacientes';
import {ComiteAdministrativo} from './comite-administrativo/comite-administrativo';
import { HistorialAtencion } from './historial-atencion/historial-atencion';
import { Medicos } from './medicos/medicos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GestionPacientes, ComiteAdministrativo, HistorialAtencion, Medicos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parcial_1');
}

