import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/containers', title: 'Containers',  icon: 'ni-ungroup', class: '' },
  { path: '/sandboxes', title: 'Sandboxes',  icon: 'ni-box-2', class: '' },
  { path: '/images', title: 'Images',  icon: 'ni-image', class: '' },
  { path: '/volumes', title: 'Volumes',  icon: 'ni-app', class: '' },
  { path: '/metric-dashboard', title: 'Metric Dashboard',  icon: 'ni-sound-wave', class: '' },
  { path: '/users', title: 'Users',  icon: 'ni-single-02', class: '' }


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
