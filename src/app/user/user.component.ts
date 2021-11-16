import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id : number 
  user:any
  constructor(private route : ActivatedRoute,
              private userService: UserService) {
    this.route.paramMap.subscribe(param => {
      this.id = param['params'].id
    })
   }

  ngOnInit(): void {
    this.userService.getusersByid(this.id).subscribe(res=>{
      this.user = res['data']
    })
  }

}
