import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-item-user-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './item-user-sidebar.component.html',
})
export class ItemUserSidebarComponent {
  @Input({ required: true }) username: string = '';
}
