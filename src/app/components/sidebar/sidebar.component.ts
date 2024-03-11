import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'About',  icon:'person', class: '' },
    { path: '/table-list', title: 'Payment',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Upcoming Payment',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Integration',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Members',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  authToken: string;

  constructor() { }

  ngOnInit() {
    this.authToken = sessionStorage.getItem('current-token');
    console.log(this.authToken)
    
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
