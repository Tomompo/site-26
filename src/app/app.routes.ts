import { Routes } from '@angular/router';
import { Layout } from './shared/ui/layout/layout';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Layout,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('./features/home/home.shell')).HomeShell,
      },
    ],
  },
];
