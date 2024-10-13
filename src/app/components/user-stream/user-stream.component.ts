import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '../../services/users.service';
import { PlayerComponent } from '../player/player.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-user-stream',
  standalone: true,
  imports: [PlayerComponent, LucideAngularModule],
  templateUrl: './user-stream.component.html',
})
export class UserStreamComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  loading = true;
  error: boolean = false;
  user: User | null = null;

  ngOnInit(): void {
    if (this.route.snapshot.params['username']) {
      const username = this.route.snapshot.params['username'];

      this.usersService.getUser(username).subscribe({
        next: (user) => {
          this.user = user;
        },
        error: () => {
          this.error = true;
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}
