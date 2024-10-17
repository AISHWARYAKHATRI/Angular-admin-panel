import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DasboardComponent,
      },
    ],
  },
];
