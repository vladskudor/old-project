import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewServiceService} from '../service/new-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  public param1: any;
  public param2: any;
  public paramLog: any;
  public paramPas: any;
  public subscription: Subscription;
  public date: any;
  public nameTitle: string;
  public thisUser: any;
  public currentUser: any;
  public email: string = '';
  public passw1: number = 0;
  public passw2: number = 0;
  public name: string;
  public surname: string;
  public day: string;
  public moonth: string;
  public year: string;
  public array: any = [];
  public divUser: boolean = false;
  public sex: string = '';
  public isEdit1: boolean = false;
  public isEdit2: boolean = true;
  public isEdit3: boolean = false;
  public isEdit5: boolean = false;
  public pers: object;
  public allUsers: any;
  public inputValuelog: string;
  public inputValuepas: string;
  public inpChange: boolean = false;
  public currentEditUser: any = null;
  public dateOne: Date = new Date();
  public url: 'localhost:4200/forms';
  public new: string;
  public globalUser: any;
  public user: any;
  public likes: false;

  constructor(private Http: HttpClient, private svc: NewServiceService, private activateRoute: ActivatedRoute, private router: Router) {
    this.date = new Date();
    console.log(this.date);
  }

  ngOnInit(): void {
    this.open();
    this.globalUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('person'));
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (users) {
      this.allUsers = users;
    }

    if (!user) {
      document.getElementById('sectionRegistr').style.display = 'block';
    }

    if (user) {
      document.getElementById('sectionRegistr').style.display = 'none';
      this.currentUser = user;
    }

    if (this.globalUser) {
      this.currentEditUser = this.globalUser;
      this.currentUser = this.globalUser;
      this.allUsers = users;
    }
    console.log('this.currentUser', this.currentUser);
    console.log('this.allUsers', this.allUsers);
  }

  public showEdit1(): void {
    this.isEdit1 = false;
    this.isEdit2 = true;
    this.divUser = false;
  }

  public showEdit2(): void {
    this.isEdit2 = false;
    this.isEdit1 = true;
    this.divUser = true;
  }

  public funR1(r1, r2): void {
    if (r1.checked) {
      r1.checked = true;
      r2.checked = false;
      this.sex = 'Жіночий';
    } else if (r2.checked) {
      r1.checked = false;
      r2.checked = true;
      this.sex = 'Чоловічий';
    }
  }

  public funR2(r1, r2): void {
    if (r2.checked) {
      r1.checked = false;
      r2.constructor = true;
      this.sex = 'Чоловічий';
    } else {
      r1.checked = true;
      r2.checked = false;
      this.sex = 'Жіночий';
    }
  }

  public register(inpmail, inppassword, inppassw2, inpname, inpsurname, inpday, inpmoonth, inpyear, sex): void {
    if (this.email.length < 8) {
      alert('Назва повиненна містити не менше 8 символів');
    }
    if (this.passw1 !== this.passw2) {
      alert('Паролі не збігаються');
    }
    if (this.name.length < 3) {
      alert('Заповніть поле з ім ям');
    }
    if (this.surname.length < 3) {
      alert('Заповніть поле з прізвищем');
    } else {
      let users = JSON.parse(localStorage.getItem('person'));

      if (!users) {
        users = [];
      }

      const newUser = {
        email: inpmail,
        passw1: inppassword,
        passw2: inppassw2,
        name: inpname,
        surname: inpsurname,
        day: inpday,
        moonth: inpmoonth,
        year: inpyear,
        likes: false,
        sex
      };
      users.push(newUser);
      localStorage.setItem('person', JSON.stringify(users));
    }
    alert('Реєстрація пройдена');
  }

  public printForm(user, inpmail, inppassword, inppassw2, inpname, inpsurname, inpday, inpmoonth, inpyear, sex): void {
    const data = localStorage.getItem('person');
    this.allUsers = JSON.parse(data);
    this.currentUser = null;

    if (this.email.length < 8) {
      alert('Назва повиненна містити не менше 8 символів');
    } else {
      console.log('Користувач: ' + this.name + ' ' + this.surname + ' email ' + this.email + '@mail.cars');
      this.divUser = !this.divUser;
      this.isEdit1 = false;
      this.isEdit2 = false;
      this.isEdit5 = true;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.currentUser = this.name;
      this.router.navigate(['/login']);
    }
  }

  public open(): void {
    this.subscription = this.activateRoute.params.subscribe((params) => {
      this.param1 = params['inputValuelog'];
      this.param2 = params['inputValuepas'];
    });

    this.paramLog = this.param1;
    this.paramPas = this.param2;


    const data = localStorage.getItem('person');
    this.allUsers = JSON.parse(data);

    this.allUsers.forEach((user) => {
      if (user.passw1 === this.paramPas && user.email === this.paramLog) {
        this.isEdit5 = true;
        this.currentUser = user;
        this.currentEditUser = user;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      }
    });

  }

  public logout(): void {
    this.currentUser = null;
    this.router.navigate(['/login']);
    localStorage.removeItem('currentUser');
  }

  public close(): void {
    console.log('Вийшов користувач: ' + this.currentUser.name);
    this.isEdit3 = false;
    this.isEdit5 = true;
    this.isEdit5 = false;
    this.inputValuelog = null;
    this.inputValuepas = null;
  }

  public deleteUser(user): void {
    for (let us = 0; us < this.allUsers.length; us++) {
      if (this.currentUser === user) {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
      }
      if (this.allUsers[us] === user) {
        this.allUsers.splice(us, 1);
        console.log('Delete user: ' + user.name);
        localStorage.setItem('person', JSON.stringify(this.allUsers));
      }
    }
  }

  public editUser(user, nameUser): void {
    for (let edit = 0; edit < this.allUsers.length; edit++) {
      if (this.allUsers[edit] === user) {
        this.currentEditUser = user;
        this.thisUser = nameUser;
        this.thisUser.style.color = 'green';
      }
    }

  }

  public saveChange(nameUser): void {
    this.thisUser.style.color = '#343a40';
    localStorage.setItem('person', JSON.stringify(this.allUsers));
  }

  public nameChange(user): void {
    this.inpChange = true;
  }
}
