import {Component, OnInit} from '@angular/core';
import {NewServiceService} from '../service/new-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent implements OnInit {
  public showUl: boolean = true;
  public nameUser: any;
  public usersAll: any;
  public userId: string;
  public id: string;
  public url = 'https://jsonplaceholder.typicode.com/posts';
  public title: string;
  public bodyValue: any;
  public body: any;
  public dataForms: any;
  public userName: string;
  public response: any;
  public weather: any;
  public currency: any;

  constructor(private http: HttpClient, private svc: NewServiceService) {
    svc.consoleText('HELLO VLAD');
    console.log(svc.name);
    this.nameUser = svc.name;
  }

  public search(): void {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }

  ngOnInit(): void {
    this.svc.getRandomApiValue().subscribe((data: any) => {
      let wea = JSON.stringify(data);
      this.weather = JSON.parse(wea);
      console.log(data);
    });

    this.svc.getCurrency().subscribe((currency) => {
      let cur = JSON.stringify(currency);
      this.currency = JSON.parse(cur);
      console.log(currency);
    });

    this.postAll();
    this.svc.getAll()
      .subscribe((posts) => {
        this.usersAll = posts;
        this.usersAll.unshift(posts);
        console.log(this.usersAll);
      });

    if (!this.usersAll) {
      console.log('LOADING...');
    }
    if (this.usersAll) {
      console.log(this.usersAll);
    }
  }

  public showMenu(): void {
    this.showUl = !this.showUl;
  }

  public postAll(): void {
    this.http.post(this.url, this.bodyValue = {userId: this.userId, id: this.id, title: this.title, body: this.body})
      .subscribe((posts: any) => {
        this.usersAll.unshift(this.bodyValue);
        console.log(posts);
      });
  }
}
