import { Routes } from '@angular/router';

import { PlateformComponent } from './plateform.component';
import { ContainersComponent } from '../../ui-project/containers/containers.component';
import { SandboxesComponent } from '../../ui-project/sandboxes/sandboxes.component';
import { LogsComponent } from '../../ui-project/logs/logs.component';
import { ApiDocsComponent } from '../../ui-project/api-docs/api-docs.component';
import { ApiTokensComponent } from '../../ui-project/api-tokens/api-tokens.component';
import { ImagesComponent } from '../../ui-project/images/images.component';
import { VolumesComponent } from '../../ui-project/volumes/volumes.component';
import { MetricDashboardComponent } from '../../ui-project/metric-dashboard/metric-dashboard.component';
import { UsersComponent } from '../../ui-project/users/users.component';

export const PlateformRoutes: Routes = [
  { path: '', component: PlateformComponent, children: [
    { path: 'containers', component: ContainersComponent },
    { path: 'sandboxes', component: SandboxesComponent },
    { path: 'logs', component: LogsComponent },
    { path: 'api-docs', component: ApiDocsComponent },
    { path: 'api-tokens', component: ApiTokensComponent },
    { path: 'images', component: ImagesComponent },
    { path: 'volumes', component: VolumesComponent },
    { path: 'metric-dashboard', component: MetricDashboardComponent },
    { path: 'users', component: UsersComponent },

  ],
},

];
