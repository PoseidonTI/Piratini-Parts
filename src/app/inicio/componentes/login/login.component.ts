import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import {IpService} from '../../../shared/services/ip/ip.service';
import {Login} from '../../../shared/models/login';
import {LoginService} from '../../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() hoteleiro = true;
  login: Login = new Login();
  processando = false;

  titulo = 'Login';

  constructor(
    private loginService: LoginService,
    private ipService: IpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIp();
  }

  public onSubmit(formLogin: NgForm): void {
    if (formLogin.invalid) {
      return;
    }
    this.processando = true;
    this.router.navigate(['/inicio/paginas']).then();
  }

  public getIp(): void {
    this.ipService
      .getIPAddress()
      .subscribe(response => {
        this.login.ip = response.ip;
        console.log(this.login.ip);
      }, error => {
        this.login.ip = 'desconhecido';
        Swal.Fire({
          title: 'Falha ao logar',
          text: error
        });
      });
  }

}
