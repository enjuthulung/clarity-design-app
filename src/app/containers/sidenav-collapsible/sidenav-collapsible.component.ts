import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-collapsible',
  templateUrl: './sidenav-collapsible.component.html',
  styleUrls: ['./sidenav-collapsible.component.css']
})
export class SidenavCollapsibleComponent implements OnInit {
  @Input() navItems: Array<any>;
  constructor() { }

  ngOnInit() {
  }
  isDivider(navItem) {
    return !!navItem.divider
  }

  isTitle(navItem) {
    return !!navItem.title
  }

  isHasChild(navItem) {
    return navItem.hasOwnProperty('children') && navItem.children.length > 0;
  }
}
