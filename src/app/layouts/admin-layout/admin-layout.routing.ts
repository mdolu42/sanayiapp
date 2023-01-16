import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { PersonelComponent } from '../../personel/personel.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { IsyeriComponent } from '../../isyeri/isyeri.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { OgrenciComponent } from '../../ogrenci/ogrenci.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'anasayfa',      component: HomeComponent },
    { path: 'personel',           component: PersonelComponent },
    { path: 'ogrenci',        component: OgrenciComponent },
    { path: 'isyeri',           component: IsyeriComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
   
];
