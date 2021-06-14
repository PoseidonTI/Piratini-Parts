import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  processando: false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitInscrevaSe(formInscrevaSe: NgForm) {}

}
