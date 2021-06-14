import { Component, OnInit } from '@angular/core';
import {IpService} from '../../shared/services/ip/ip.service';

@Component({
  selector: 'app-login-associado',
  templateUrl: './login-pagina.component.html',
  styleUrls: ['./login-pagina.component.scss']
})
export class LoginPaginaComponent implements OnInit {

  ip: any;

  constructor() { }

  ngOnInit(): void {
  }
}
