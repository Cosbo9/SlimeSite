import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` 
  <div class="headerContainer">
    <div class="logoContainer">
      <h2>BRAND NAME</h2>
      <img src="../../assets/slimeRose.png" alt="logo" />
    </div>
    <div class="menuContainer">
      <mat-icon class="material-symbols-outlined" [matMenuTriggerFor]="menu">
        menu
      </mat-icon>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>GALLERY</button>
      </mat-menu>
    </div>
  </div>`,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
