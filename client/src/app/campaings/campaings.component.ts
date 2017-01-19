import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-campaings',
  templateUrl: './campaings.component.html',
  styleUrls: ['./campaings.component.css']
})
export class CampaingsComponent implements OnInit {

  constructor( private loginService: UserService  ) { 

  }

  ngOnInit() {
  }

}
