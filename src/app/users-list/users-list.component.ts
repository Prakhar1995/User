import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  userList :any[] =[]
  user:any;
  constructor(private userService: UserService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getusers().subscribe((res: any)=>{
        this.userList = res.data
    })
  }

  userClicked(userId) {
    this.router.navigate(['user',userId], { relativeTo: this.route })
  }

  deleteUser(id:number) {
    let users = this.userList.filter(user => user.id!= id);
    this.userList =users

  }

}
