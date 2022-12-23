import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.css']
})
export class DaughterComponent implements OnInit {

  @Input() shopName: string = 'vlad';

  constructor() {
  }

  ngOnInit(): void {
  }

}
