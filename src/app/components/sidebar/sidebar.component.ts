import { User, UsersService } from './../../services/users.service';
import { Component, OnInit, signal } from '@angular/core';
import { ItemUserSidebarComponent } from '../item-user-sidebar/item-user-sidebar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ItemUserSidebarComponent, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  providers: [],
})
export class SidebarComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
