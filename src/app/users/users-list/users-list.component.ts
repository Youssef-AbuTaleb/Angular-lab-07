import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  usersData!: any;
  pageNumber: number = 1;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.fetchUsersPage(1);
  }

  fetchUsersPage(page: number = 1) {
    this.userService.fetchUsersData(page).subscribe((d) => {
      this.usersData = d;
    });
    this.pageNumber = page;
  }
}
