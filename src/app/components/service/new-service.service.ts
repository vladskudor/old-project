import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewServiceService implements OnInit {
  public response: any;
  public name: string;
  public headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {

  }

  public getAll(): Observable<any> {
      return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  public consoleText(arg): void {
    console.log(arg);
  }

  public getData(): Observable<any> {
    return this.httpClient.get('http://localhost:4200/request');
  }

  public getRandomApiValue() {
    return this.httpClient.get('https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=d2d3af14c23f4279abf61e732c9abdfd');
  }

  public getCurrency() {
    return this.httpClient.get('https://api.fastforex.io/fetch-all?api_key=a91e184a6d-a4a5605964-qzu4cu');
  }
}
