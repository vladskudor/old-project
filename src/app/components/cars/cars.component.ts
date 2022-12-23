import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {NewServiceService} from "../service/new-service.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  //CARS
  public commentClear: any;
  public allCarOptions: boolean = false;
  public firstcarName: string;
  public secondcarName: string;
  public carModel1: string;
  public carModel2: string;
  public maxSpeed1: number;
  public maxSpeed2: number;
  public timeHundred1: number;
  public timeHundred2: number;
  public horsePower: number;
  public horsePower2: number;
  public bestPower: boolean = false;
  public bestPower2: boolean = false;
  public allCars: any;
  public currentCar: any;
  public bestSpeed1: boolean = false;
  public bestSpeed2: boolean = false;
  public bestHundred1: boolean = false;
  public bestHundred2: boolean = false;
  public enterCars1: boolean = false;
  public enterCars2: boolean = false;
  public rating1: number = null;
  public rating2: number = null;
  public comment: string;
  public comments: any = [];
  public inputComments: boolean = false;
  public name: any;
  public password: any;
  public nameUser: string;
  public user: string;
  public request: string;
  public usersBox: any;
  public avtorisation: boolean = false;
  public registr: boolean = true;
  public currentUserCar: any;
  public cars: boolean;
  public newCars: any;
  public currentUser: any;
  public arr: any;
  public foundCar: any;


  // public image: any;
  // public file: any;
  // public reader: any;
  constructor(private router: Router, private http: HttpClient, private svc: NewServiceService) {

  }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      this.currentUser = currentUser;
    }

    const userName = JSON.parse(localStorage.getItem('carCurrentUser'));
    if (userName) {
      this.cars = true;
      this.currentUserCar = userName;
      this.avtorisation = false;
      this.registr = false;
    }

    const cars = JSON.parse(localStorage.getItem('car'));
    if (cars) {
      this.allCars = cars;
    }

    let comms = JSON.parse(localStorage.getItem('comment'));
    if (comms) {
      this.comments = comms;
    }

    this.usersBox = JSON.parse(localStorage.getItem('userCars'));
  }

  // search(allCarsSearch): void {
  //   const newArr = this.allCars.filter((item) => {
  //     return item.firstcarName === allCarsSearch;
  //   });
  //   const car = JSON.stringify(newArr);
  //   console.log(JSON.parse(car));
  // }

  public showEdit1(): void {
    this.avtorisation = false;
    this.registr = true;
  }

  public showEdit2(): void {
    this.avtorisation = true;
    this.registr = false;
  }

  // CARS
  public addCom(carName1, inpComment): void {
    if (this.commentClear == null) {
      return;
    }
    const newComments = {
      // userName: this.currentUserCar.name,
      userName: this.currentUser.name,
      comment: inpComment
    };
    this.comments.push(newComments);
    localStorage.setItem('comment', JSON.stringify(this.comments));
  }

  public reset(): void {
    this.enterCars1 = false;
    this.enterCars2 = false;
    this.firstcarName = null;
    this.secondcarName = null;
    this.carModel1 = null;
    this.carModel2 = null;
    this.maxSpeed1 = null;
    this.maxSpeed2 = null;
    this.timeHundred1 = null;
    this.timeHundred2 = null;
    this.horsePower = null;
    this.horsePower2 = null;
    this.bestSpeed1 = false;
    this.bestSpeed2 = false;
    this.bestHundred1 = false;
    this.bestHundred2 = false;
    this.bestPower = false;
    this.bestPower2 = false;
    this.rating1 = null;
    this.rating2 = null;
    this.commentClear = null;
  }

  public saveCar(arr, carName1, carName2, carModels1, carModels2, speed1, hundred1, horsepower, horsepower2): void {
    let cars = JSON.parse(localStorage.getItem('car'));
    if (!cars) {
      cars = [];
    }
    const newCars = {
      firstcarName: carName1,
      carModel1: carModels1,
      maxSpeed1: speed1,
      timeHundred1: hundred1,
      horsePower: horsepower
    };
    if (this.firstcarName == null) {
      return;
    } else {
      cars.push(newCars);
      localStorage.setItem('car', JSON.stringify(cars));
      this.allCars = cars;
    }
  }


  public carEnter(arr): void {
    for (let car = 0; car < this.allCars.length; car++) {
      if (this.allCars[car] === arr) {
        this.currentCar = arr;
        this.firstcarName = this.currentCar.firstcarName;
        this.carModel1 = this.currentCar.carModel1;
        this.maxSpeed1 = this.currentCar.maxSpeed1;
        this.timeHundred1 = this.currentCar.timeHundred1;
        this.horsePower = this.currentCar.horsePower;
      }
    }

    console.log(this.currentCar.firstcarName);
    console.log('VS');
    this.enterCars1 = false;
  }

  public carEnter2(arr): void {
    for (let car = 0; car < this.allCars.length; car++) {
      if (this.allCars[car] === arr) {
        this.currentCar = arr;
        this.secondcarName = this.currentCar.firstcarName;
        this.carModel2 = this.currentCar.carModel1;
        this.maxSpeed2 = this.currentCar.maxSpeed1;
        this.timeHundred2 = this.currentCar.timeHundred1;
        this.horsePower2 = this.currentCar.horsePower;
      }
    }
    console.log(this.currentCar.firstcarName);
    this.enterCars2 = false;
  }

  public compareCars(carName1, carName2, speed1, speed2, hundred1, hundred2, horsepower, horsepower2): void {
    if (speed1 > speed2) {
      this.rating1++;
      this.bestSpeed1 = true;
      this.bestSpeed2 = false;
    } else if (speed1 < speed2) {
      this.rating2++;
      this.bestSpeed2 = true;
      this.bestSpeed1 = false;
    } else {
      this.bestSpeed2 = false;
      this.bestSpeed1 = false;
    }

    if (hundred1 > hundred2) {
      this.rating2++;
      this.bestHundred1 = false;
      this.bestHundred2 = true;
    } else if (hundred1 < hundred2) {
      this.rating1++;
      this.bestHundred2 = false;
      this.bestHundred1 = true;
    } else {
      this.bestHundred2 = false;
      this.bestHundred1 = false;
    }

    if (horsepower > horsepower2) {
      this.rating1++;
      this.bestPower = true;
      this.bestPower2 = false;
    } else if (horsepower < horsepower2) {
      this.rating2++;
      this.bestPower2 = true;
      this.bestPower = false;
    } else {
      this.bestPower2 = false;
      this.bestPower = false;
    }

    if (this.rating1 > this.rating2) {
      console.log('WIСTORY', this.firstcarName);
    } else if (this.rating1 < this.rating2) {
      console.log('WIСTORY', this.secondcarName);
    }
  }

  public delCar(arr, modal): void {
    modal.style.display = 'block';
    this.arr = arr;
    // for (let del = 0; del < this.allCars.length; del++) {
    //   if (this.allCars[del] === arr) {
    //     this.allCars.splice(del, 1);
    //     localStorage.setItem('car', JSON.stringify(this.allCars));
    //   }
    // }
  }

  public yes(modal): void {
    for (let del = 0; del < this.allCars.length; del++) {
      if (this.allCars[del] === this.arr) {
        this.allCars.splice(del, 1);
        localStorage.setItem('car', JSON.stringify(this.allCars));
        modal.style.display = 'none';
      }
    }
  }

  public no(modal): void {
    modal.style.display = 'none';
  }

  public carDel(optCars): void {
    this.foundCar = JSON.stringify(optCars);
    this.router.navigate(['/information', `${this.foundCar}`]);
  }

  //
  // public download(readFileValue): void{
  //   this.file = readFileValue.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(this.file);
  //   reader.onload = (img: any) => {
  //     img.src = reader.result;
  //     console.log(img);
  //   }
  // }
}
