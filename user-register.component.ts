import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {


  model = new User();
  retypePass = '';

  constructor( private data: DataService) { }

  ngOnInit() {
    console.log('user register ngOnInit');
  }

  save(){
    console.log('saving', this.model);

    this.data.saveUser(this.model);
  }
}
