import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  public getItensMenu(): Array<any> {
    return [
      {
        titulo: 'Home',
        link: 'home',
        icone: 'home'
      },
      {
        titulo: 'HDs',
        link: 'hds',
        icone: 'sensor_window'
      },
      {
        titulo: 'Memórias',
        link: 'memorias',
        icone: 'memory'
      },
      {
        titulo: 'Monitores',
        link: 'monitores',
        icone: 'desktop_windows'
      },
    ];
  }
}
