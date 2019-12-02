import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  headerItems = [];
  navItems = [];

  constructor() { }

  ngOnInit() {
    this.headerItems = [
      {
        name: 'Viewing List',
        url: '/viewinglist-dashboard/',
        icon: 'fa fa-list',
        badge: {
          variant: 'info'
        }
      },
      {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Cards',
            url: '/base/cards',
            icon: 'icon-puzzle'
          },
          {
            name: 'Carousels',
            url: '/base/carousels',
            icon: 'icon-puzzle'
          },
          {
            name: 'Collapses',
            url: '/base/collapses',
            icon: 'icon-puzzle'
          },
          {
            name: 'Forms',
            url: '/base/forms',
            icon: 'icon-puzzle'
          },
          {
            name: 'Pagination',
            url: '/base/paginations',
            icon: 'icon-puzzle'
          },
          {
            name: 'Popovers',
            url: '/base/popovers',
            icon: 'icon-puzzle'
          },
          {
            name: 'Progress',
            url: '/base/progress',
            icon: 'icon-puzzle'
          },
          {
            name: 'Switches',
            url: '/base/switches',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tables',
            url: '/base/tables',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tabs',
            url: '/base/tabs',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tooltips',
            url: '/base/tooltips',
            icon: 'icon-puzzle'
          }
        ]
      }
    ];

    this.navItems = [
      {
        name: 'Viewing List',
        url: '/viewinglist-dashboard/',
        icon: 'fa fa-list',
        badge: {
          variant: 'info'
        }
      },
      {
        name: 'Downloads',
        url: '/download/',
        icon: 'cui-cloud-download',
        badge: {
          variant: 'info'
        }
      },
      {
        name: 'Admin User',
        url: '/adminuser/',
        icon: 'fa fa-users',
        badge: {
          variant: 'info'
        }
      },
      {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Cards',
            url: '/base/cards',
            icon: 'icon-puzzle'
          },
          {
            name: 'Carousels',
            url: '/base/carousels',
            icon: 'icon-puzzle'
          },
          {
            name: 'Collapses',
            url: '/base/collapses',
            icon: 'icon-puzzle'
          },
          {
            name: 'Forms',
            url: '/base/forms',
            icon: 'icon-puzzle'
          },
          {
            name: 'Pagination',
            url: '/base/paginations',
            icon: 'icon-puzzle'
          },
          {
            name: 'Popovers',
            url: '/base/popovers',
            icon: 'icon-puzzle'
          },
          {
            name: 'Progress',
            url: '/base/progress',
            icon: 'icon-puzzle'
          },
          {
            name: 'Switches',
            url: '/base/switches',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tables',
            url: '/base/tables',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tabs',
            url: '/base/tabs',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tooltips',
            url: '/base/tooltips',
            icon: 'icon-puzzle'
          }
        ]
      }
    ];
  }
  click() {
    alert("jello");
  }
}
