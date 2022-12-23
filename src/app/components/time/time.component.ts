import {Component, OnInit , DoCheck} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit , DoCheck{
  public hours: any;
  public minutes: any;
  public seconds: any;
  public sec: any;
  public request: 'req true';
  changeSeconds: any;
  secon: any;

  constructor() {
  }

  ngOnInit(): void {
    this.time();
  }

  ngDoCheck() {

  }

  public time(): void {
    let date = new Date();
    let Year = date.getFullYear();
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    this.hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    this.minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    this.seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let miliseconds = date.getMilliseconds() < 10 ? '0' + date.getMilliseconds() : date.getMilliseconds();
    let time = day + '-' + month + '-' + Year + '  ' + this.hours + ':' + this.minutes + ':' + this.seconds + '  ' + miliseconds;
    console.log(this.hours, this.minutes, this.secon);
  }
}
