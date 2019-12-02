import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
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
