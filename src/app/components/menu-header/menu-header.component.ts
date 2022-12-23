import {Component, DoCheck, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewServiceService} from '../service/new-service.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit, DoCheck {
  public showUl: boolean = true;
  public currentUserMenu: any;
  public status: any;
  public name: any;
  public globalUser: any;

  constructor(private router: Router, private svc: NewServiceService, private element: ElementRef) {

  }

  ngOnInit(): void {
    this.svc.getData().subscribe((res) => {
      console.log(res.name);
    });

    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.currentUserMenu = user;
      this.status = this.currentUserMenu.name;
    }
  }

  ngDoCheck(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUserMenu = user;
      this.status = 'true';
    }
    if (!user) {
      this.currentUserMenu = false;
      this.status = 'false';
    }
  }

  public user(): void {
    // const user = localStorage.getItem('currentUser');
    // if (!user) {
    //   this.router.navigate(['/login']);
    //   console.error('Error,ви повинні увійти');
    //   return;
    // }
  }

  public profile(): void {
    this.router.navigate(['/profiele']);
  }

  showMenu(): void {
    this.showUl = !this.showUl;
  }
}
