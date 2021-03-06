import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { RosterComponent }   from './roster/roster.component';

import { PlayerDetailComponent }   from './player-detail/player-detail.component';

import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [

  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'roster',
    component: RosterComponent
  },
  {
  path: 'players/:id',
  component: PlayerDetailComponent
},
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
