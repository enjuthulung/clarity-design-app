import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})
export class SubnavComponent implements OnInit {
  @Input() subNavItems: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
