import { SidebarComponent } from './../sidebar/sidebar.component';
import { PlayerComponent } from '../player/player.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, PlayerComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
