import {Component, OnInit, ViewChild, AfterViewInit, Input, ElementRef} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ParametrosGenericos} from '../../../shared/models/parametros-genericos';
import {MatAutocomplete} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {COMMA} from '@angular/cdk/keycodes';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lista-generica',
  templateUrl: './lista-generica.component.html',
  styleUrls: ['./lista-generica.component.scss']
})
export class ListaGenericaComponent implements OnInit, AfterViewInit {

  @Input() parametros: ParametrosGenericos = new ParametrosGenericos();

  ELEMENT_DATA = [
    {imagem: 1, hotel: 'Sky Ville', data: '10/01/2021 a 12/01/2021', acoes: 'Ver/Editar' },
    {imagem: 2, hotel: 'Laje de Pedra', data: '25/02/2021 a 12/01/2021', acoes: 'Ver/Editar' },
    {imagem: 3, hotel: 'Laghetto Vivace Canela', data: '28/02/2021 a 12/01/2021', acoes: 'Ver/Editar' },
  ];

  vegetables = [
    {name: 'index'},
    {name: 'Hotel'},
    {name: 'Data Reserva'},
  ];

  displayedColumns: string[] = ['imagem', 'hotel', 'data', 'acoes'];

  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public drop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
