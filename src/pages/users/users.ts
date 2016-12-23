import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// models
import { User } from '../../models/user';

// providers
import { GithubUsers } from '../../providers/github-users';

// pages
import { UserDetailsPage } from '../user-details/user-details';


// so i guess this @component ... export shit is basically defining a class that 
// is directly hooked to (and controlling all the logic for) the page listed.
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
  	});
  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }

  goToDetails(login: string){
    // open the user details page, passing in their username
    // NOTE: {login} is shorthand for {login: login}, so this is technically a json object
    this.navCtrl.push(UserDetailsPage, {login});
  }

}
