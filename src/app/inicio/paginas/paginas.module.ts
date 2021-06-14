import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import { HomeComponent } from './home/home.component';
import { ShareModule} from '../../shared/share.module';
import { MaterialModule } from '../../material/material.module';
import { InicioModule } from '../inicio.module';
import { LoginComponent } from '../componentes/login/login.component';
import { LoginPaginaComponent } from '../login/login-pagina.component';
import { MonitoresComponent } from './monitores/monitores.component';
import { HdsComponent } from './hds/hds.component';
import { MeusPedidosComponent } from './meus-pedidos/meus-pedidos.component';
import { MemoriasComponent } from './memorias/memorias.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { FavoritosComponent } from './favoritos/favoritos.component';


@NgModule({
  declarations: [
    PaginasComponent,
    HomeComponent,
    LoginPaginaComponent,
    LoginComponent,
    MonitoresComponent,
    HdsComponent,
    MeusPedidosComponent,
    MemoriasComponent,
    MeusDadosComponent,
    FavoritosComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    MaterialModule,
    ShareModule,
    InicioModule,
  ]
})
export class PaginasModule { }
