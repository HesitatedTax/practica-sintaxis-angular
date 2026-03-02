import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';
import { Title } from '@shared/title/title';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule,Title, RouterLink],
  templateUrl: './users.html',
})
export default class Users {

  usersService = inject(UsersService)



}
