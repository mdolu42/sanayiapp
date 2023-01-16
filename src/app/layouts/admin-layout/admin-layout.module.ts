import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
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
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    IsyeriComponent,
    NotificationsComponent,
    OgrenciComponent
  ]
})

export class AdminLayoutModule {}
