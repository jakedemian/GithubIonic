import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// import out User object (basically a basic Struct or Java Bean)
import { User } from '../models/user'

@Injectable()
export class GithubUsers {
	githubApiUrl = 'https://api.github.com';

	constructor(public http: Http) { }

	/**
		loads a jsonObject from https://api.github.com/users
	*/
	load(): Observable<User[]> {
		return this.http.get(this.githubApiUrl + '/users')
		.map(res => <User[]>res.json());
	}

	/**
		given a user's login, obtain their profile details from https://api.github.com/users/__theirUsername__
	*/
	loadDetails(login: string): Observable<User> {
		return this.http.get(this.githubApiUrl + '/users/' + login)
			.map(res => <User>( res.json()) );
	}

}
