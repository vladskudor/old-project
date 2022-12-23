import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {
  public likes: number = 735;
  public like: any;
  public user: any;
  public currentUser: any;
  public menu: boolean;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = user;
    }

    const like = JSON.parse(localStorage.getItem('likes'));
    if (like) {
      this.likes = like.likes;
    }
  }

  public upToMenu(): void{
    window.scrollTo(0, 0);
  }

  public plusLikes(elementLikes): void {


    this.likes++;
    this.user = {
      likes: this.likes
    };
    localStorage.setItem('likes', JSON.stringify(this.user));
  }
}
