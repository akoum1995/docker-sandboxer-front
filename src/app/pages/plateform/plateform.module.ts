import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlateformRoutes } from './plateform.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';
import { PlateformComponent } from './plateform.component';
import { ContainersComponent } from '../../ui-project/containers/containers.component';
import {MatTooltipModule} from '@angular/material';
import { SandboxesComponent } from '../../ui-project/sandboxes/sandboxes.component';
import { LogsComponent } from '../../ui-project/logs/logs.component';
import { ApiDocsComponent } from '../../ui-project/api-docs/api-docs.component';
import { ApiTokensComponent } from '../../ui-project/api-tokens/api-tokens.component';
import { ImagesComponent } from '../../ui-project/images/images.component';
import { VolumesComponent } from '../../ui-project/volumes/volumes.component';
import { MetricDashboardComponent } from '../../ui-project/metric-dashboard/metric-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(PlateformRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatTooltipModule,
  ],
  declarations: [
    PlateformComponent,
    ContainersComponent,
    SandboxesComponent,
    LogsComponent,
    ApiDocsComponent,
    ApiTokensComponent,
    ImagesComponent,
    VolumesComponent,
    MetricDashboardComponent
  ]
})
export class PlateformModule { }
