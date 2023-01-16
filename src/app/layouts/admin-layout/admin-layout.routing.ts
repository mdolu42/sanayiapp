import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { IsyeriComponent } from '../../isyeri/isyeri.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { OgrenciComponent } from '../../ogrenci/ogrenci.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'anasayfa',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'isyeri',           component: IsyeriComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'ogrenci',        component: OgrenciComponent },
];
