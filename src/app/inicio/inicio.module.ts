import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { MaterialModule } from '../material/material.module';
import { ShareModule } from '../shared/share.module';
import { ListaGenericaComponent } from './componentes/lista-generica/lista-generica.component';


@NgModule({
  declarations: [
    InicioComponent,
    ListaGenericaComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ShareModule,
    MaterialModule,
  ],
  exports: [
    ListaGenericaComponent,
  ]
})
export class InicioModule { }
