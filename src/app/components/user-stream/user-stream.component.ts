import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-stream',
  standalone: true,
  imports: [],
  templateUrl: './user-stream.component.html',
})
export class UserStreamComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.params['username']) {
      console.log(this.route.snapshot.params['username']);
    }
  }
}
