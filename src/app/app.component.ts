import {Component, OnInit} from '@angular/core';
import {NewServiceService} from './components/service/new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public name: string;

  constructor(private newSvc: NewServiceService) {
    // window.addEventListener('beforeunload', (event) => {
    //   event.returnValue = `You have unsaved changes, leave anyway?`;
    // });
  }

  ngOnInit(): void {

  }
}
