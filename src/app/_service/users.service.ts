import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  fetchUsersData(pageNum: number = 1) {
    return this.http.get(
      `https://www.mecallapi.com/api/users?page=${pageNum}&per_page=5`
    );
  }
}
