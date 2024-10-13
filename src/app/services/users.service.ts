import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  username: string;
  streaming: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users');
  }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:3000/users/${username}`);
  }
}
