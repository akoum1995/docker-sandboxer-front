import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/containers', title: 'Containers',  icon: 'ni-ungroup text-primary', class: '' },
  { path: '/sandboxes', title: 'Sandboxes',  icon: 'ni-box-2 text-orange', class: '' },
  { path: '/logs', title: 'Logs',  icon: 'ni-laptop text-yellow', class: '' },
  { path: '/api-docs', title: 'API Docs',  icon: 'ni-settings-gear-65 text-pink', class: '' },
  { path: '/api-tokens', title: 'API Tokens',  icon: 'ni-settings-gear-65 text-pink', class: '' },
  { path: '/images', title: 'Images',  icon: 'ni-image text-info', class: '' },
  { path: '/volumes', title: 'Volumes',  icon: 'ni-app text-red', class: '' },
  { path: '/metric-dashboard', title: 'Metric Dashboard',  icon: 'ni-sound-wave text-green', class: '' }

];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
