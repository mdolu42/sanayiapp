import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { PersonelComponent } from '../../personel/personel.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { IsyeriComponent } from '../../isyeri/isyeri.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { OgrenciComponent } from '../../ogrenci/ogrenci.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
  ],
  declarations: [
    HomeComponent,
    PersonelComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    IsyeriComponent,
    NotificationsComponent,
    OgrenciComponent
  ]
})

export class AdminLayoutModule {}
