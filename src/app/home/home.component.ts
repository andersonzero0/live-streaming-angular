import { HomeService } from './home.service';
import { Component, OnInit, signal } from '@angular/core';

export type User = {
  id: string;
  username: string;
  streaming: boolean;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  loading = signal(true);
  user = signal<User | null>(null);

  ngOnInit(): void {
    this.homeService.getUserData().subscribe({
      next: (data) => {
        console.log(data);
        this.user.set(data);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
