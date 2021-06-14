import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { LoginPaginaComponent } from './login/login-pagina.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPaginaComponent },
  { path: 'paginas', component: InicioComponent,
    children: [
      { path: '', loadChildren: () => import('./paginas/paginas.module').then(m => m.PaginasModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
