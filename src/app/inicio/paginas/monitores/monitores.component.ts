import { Component, OnInit } from '@angular/core';
import {ParametrosGenericos} from '../../../shared/models/parametros-genericos';

@Component({
  selector: 'app-minhas-reservas',
  templateUrl: './monitores.component.html',
  styleUrls: ['./monitores.component.scss']
})
export class MonitoresComponent implements OnInit {

  parametros = new ParametrosGenericos();

  constructor() {
    this.parametros.titulo = 'Minhas Reservas';
  }

  ngOnInit(): void {
  }

}
