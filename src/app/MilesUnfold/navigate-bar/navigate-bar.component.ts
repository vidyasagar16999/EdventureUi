import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.scss']
})
export class NavigateBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }
}
