import { Component } from '@angular/core';
import { ItemUserSidebarComponent } from '../item-user-sidebar/item-user-sidebar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ItemUserSidebarComponent, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  items = Array.from({ length: 5 }, (_, i) => i);
}
