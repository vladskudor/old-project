import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';


@Component({
  selector: 'app-profiele',
  templateUrl: './profiele.component.html',
  styleUrls: ['./profiele.component.css', './style.less']
})
export class ProfieleComponent implements OnInit {
  public currentUser: any;
  public user: any;
  public name: string;
  public surname: string;
  public email: any;
  public passw1: any;

  constructor(private routerNav: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.user = user;
      // this.name = user.name;
      // this.surname = user.surname;
      // this.email = user.email;
      // this.passw1 = user.passw1;
    }
  }

  public navEdit(): void {
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    this.routerNav.navigate(['/forms']);
  }

}
