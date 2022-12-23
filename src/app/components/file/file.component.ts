import {Component, OnInit} from '@angular/core';
import {GoogleChartInterface} from 'ng2-google-charts';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  public work: number = 1;
  public eat: number = 1;
  public study: number = 1;
  public tv: number = 1;
  public sleep: number = 1;
  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Робота', this.work],
      ['Їда', this.eat],
      ['Вивчення програмування', this.study],
      ['Телевізор', this.tv],
      ['Сон', this.sleep]
    ],
    options: {title: 'Мій робочий день'},
  };


  public seconds: number = 0;
  public minutes: number = 0;
  public hours: number = 0;

  constructor() {
  }

  public setTime(): void {
    setInterval(() => {
      this.seconds++;
      if (this.seconds > 59) {
        this.minutes++;
        this.seconds = 0;
      } else if (this.minutes > 59) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours++;
      } else if (this.hours > 23) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        alert('00;00;00');
      }
    }, 1000);
    console.log(this.seconds + ' ' + this.minutes + ' ' + this.hours);
  }

  public ngOnInit(): void {
    this.setTime();
  }


}
