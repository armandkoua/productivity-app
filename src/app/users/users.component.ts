import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone:true
})
export class UsersComponent implements OnInit {



  ngOnInit() {
    console.log('Hello world !!!');
  }

}
