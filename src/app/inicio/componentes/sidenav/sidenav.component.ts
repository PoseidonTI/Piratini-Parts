import { Component } from '@angular/core';
import { MenuService } from '../../menu/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  showFiller = false;
  itensMenu: Array<any>;

  constructor(private menuService: MenuService) {
    this.itensMenu = menuService.getItensMenu();
    console.log(this.itensMenu);
  }
}
