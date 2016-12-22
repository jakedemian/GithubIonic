import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];

  /**
	So I THINK that these arguments passed in are automatically handled for us,
		so anything we pass in can be used in the constructor.
  */
  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
  	githubUsers.load().subscribe(response => {
  		this.users = response;
  		console.log(this.users);
  	});
  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }

}
