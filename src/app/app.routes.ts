import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserStreamComponent } from './components/user-stream/user-stream.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':username', component: UserStreamComponent },
];
