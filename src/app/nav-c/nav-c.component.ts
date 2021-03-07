import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav-c',
  templateUrl: './nav-c.component.html',
  styleUrls: ['./nav-c.component.css']
})
export class NavCComponent implements OnInit {
  faBars = faBars;
  faSearch = faSearch;
  faBell = faBell;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
