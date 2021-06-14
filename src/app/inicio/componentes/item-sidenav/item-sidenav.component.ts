import { Component, Input } from '@angular/core';
import { ItemSidenav } from '../../../shared/models/item-sidenav';

@Component({
  selector: 'app-item-sidenav',
  templateUrl: './item-sidenav.component.html',
  styleUrls: ['./item-sidenav.component.scss']
})
export class ItemSidenavComponent {

  @Input() item: ItemSidenav = new ItemSidenav();

  constructor() {
  }
}
