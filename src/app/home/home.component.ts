import { SidebarComponent } from './../sidebar/sidebar.component';
import { PlayerComponent } from '../player/player.component';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, HeroComponent, PlayerComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
