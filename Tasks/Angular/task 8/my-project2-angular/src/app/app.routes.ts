import { Routes } from '@angular/router';
import { EventManager } from './event-manager/event-manager';
export const routes: Routes = [

  {
    path: '',
    redirectTo: 'event-manager',
    pathMatch: 'full'
  },


  {
    path: 'event-manager',
    component:EventManager
  },
  
  
];