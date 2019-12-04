import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ResourcesComponent } from './resources';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resources', component: ResourcesComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);