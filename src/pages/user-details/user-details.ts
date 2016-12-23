import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  login: string;
  user: User;

  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadDetails(this.login).subscribe(response => {
      this.user = response;

      // our User model only captures some of the data present in this json.
      console.log(response);
    })
  }

  ionViewDidLoad() {
    console.log('Hello UserDetails Page');
  }

}
