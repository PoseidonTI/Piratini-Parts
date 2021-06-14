import { Injectable } from '@angular/core';

import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public logar(login: Login):any {
    return;
  }
}
