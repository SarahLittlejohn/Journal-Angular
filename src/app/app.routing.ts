import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ResourcesComponent } from './resources';
import { LanguagesComponent } from './languages/languages.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { ProjectComponent } from './projects/project.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'languages', component: LanguagesComponent },
    { path: 'frameworks', component: FrameworksComponent },
    { path: 'definitions', component: DefinitionsComponent },
    { path: 'projects', component: ProjectComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);