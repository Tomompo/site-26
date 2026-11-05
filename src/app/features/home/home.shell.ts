import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Home } from './views/home/home';

@NgModule({
  providers: [
    provideRouter([
      {
        path: '',
        component: Home,
      },
    ]),
  ],
})
export class HomeShell {}
