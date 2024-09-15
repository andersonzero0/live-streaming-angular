import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserStreamComponent } from './user-stream/user-stream.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':username', component: UserStreamComponent },
];
