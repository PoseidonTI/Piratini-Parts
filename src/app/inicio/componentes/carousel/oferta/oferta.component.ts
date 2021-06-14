import {Component, Input, OnInit} from '@angular/core';
import {Oferta} from "../../../../shared/models/oferta";

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit {

  @Input() oferta: Oferta = new Oferta();

  constructor() { }

  ngOnInit(): void {

  }

}
