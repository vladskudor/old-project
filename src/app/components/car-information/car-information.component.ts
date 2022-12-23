import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-car-information',
  templateUrl: './car-information.component.html',
  styleUrls: ['./car-information.component.css']
})
export class CarInformationComponent implements OnInit {
  public cars: any;
  public param: any;
  public paramNew: any;
  public subscribtion: Subscription;
  public name: string;
  public speed: number;
  currentParam: any;

  constructor(private actRoute: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    const allCars = JSON.parse(localStorage.getItem('car'));
    if (allCars) {
      this.cars = allCars;
    }
    this.getCar();
    console.log(allCars);
  }

  public getCar(): void {
    this.subscribtion = this.actRoute.params.subscribe((params) => {
      for (let car = 0; car < this.cars.length; car++) {
        this.param = JSON.parse(params['foundCar']);
        if (this.cars[car].firstcarName === this.param.firstcarName && this.cars[car].carModel1 === this.param.carModel1) {
          this.currentParam = this.cars[car];
        }
      }
    });
  }

  save(): void {
    if (!this.cars) {
      this.cars = [];
    }
    localStorage.setItem('car', JSON.stringify(this.cars));
    this.router.navigate(['/cars']);
    alert(`Add new changes for car - ${this.currentParam.firstcarName}`);
  }
}
