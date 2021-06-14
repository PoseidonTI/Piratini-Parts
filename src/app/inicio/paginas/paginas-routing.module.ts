import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {HdsComponent} from './hds/hds.component';
import {MemoriasComponent} from './memorias/memorias.component';
import {MeusPedidosComponent} from './meus-pedidos/meus-pedidos.component';
import {MeusDadosComponent} from './meus-dados/meus-dados.component';
import {MonitoresComponent} from './monitores/monitores.component';
import {FavoritosComponent} from './favoritos/favoritos.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'hds', component: HdsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'memorias', component: MemoriasComponent },
  { path: 'meus-dados', component: MeusDadosComponent },
  { path: 'meus-pedidos', component: MeusPedidosComponent },
  { path: 'monitores', component: MonitoresComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
