import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public currentUser: any;
  public inputValuelog: any;
  public inputValuepas: any;
  public allUsers: any;
  public invalid: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    let users = JSON.parse(localStorage.getItem('person'));

    if (user) {
      this.router.navigate(['forms/:user/:true']);
    }

    if (users) {
      this.allUsers = users;
    }
  }

  public nav(): void {
    this.currentUser = false;
    this.router.navigate(['/forms']);
  }

  public navigateStatus(): void {
    this.allUsers.forEach((users) => {
      if (users.passw1 !== this.inputValuepas || users.email !== this.inputValuelog) {
        this.invalid = true;
        return;
      } else {
        this.router.navigate(['/forms', this.inputValuelog, this.inputValuepas]);
      }
    });

  }

}
