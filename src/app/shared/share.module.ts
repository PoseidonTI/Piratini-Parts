import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragdropDirective } from './directives/dragdrop.directive';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from '../inicio/componentes/sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { ItemSidenavComponent } from '../inicio/componentes/item-sidenav/item-sidenav.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DragdropDirective,
    SidenavComponent,
    ItemSidenavComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    IvyCarouselModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    HttpClientModule,
  ],
  exports: [
    FlexLayoutModule,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    DragdropDirective,
    NgxMaskModule,
    IvyCarouselModule,
    HttpClientModule,
    ItemSidenavComponent
  ],
})
export class ShareModule { }
