import { Routes } from '@angular/router';

import { PlateformComponent } from './plateform.component';
import { ContainersComponent } from 'src/app/ui-project/containers/containers.component';
import { SandboxesComponent } from 'src/app/ui-project/sandboxes/sandboxes.component';
import { LogsComponent } from 'src/app/ui-project/logs/logs.component';
import { ApiDocsComponent } from 'src/app/ui-project/api-docs/api-docs.component';
import { ApiTokensComponent } from 'src/app/ui-project/api-tokens/api-tokens.component';
import { ImagesComponent } from 'src/app/ui-project/images/images.component';
import { VolumesComponent } from 'src/app/ui-project/volumes/volumes.component';
import { MetricDashboardComponent } from 'src/app/ui-project/metric-dashboard/metric-dashboard.component';

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
  ],
},

];
