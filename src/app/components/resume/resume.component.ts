import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  douchter: any;
  public nameEnter: string;
  public surnameEnter: string;
  public ageEnter: number;
  public array: any;
  public curShop: string;
  public shop: boolean = false;
  public object: object;
  public name: string;
  public descriptionEnter: string;
  public lengthEnter: number;
  //
  public byProduct: any = [];
  public img: any;

  constructor() {
  }

  ngOnInit(): void {
    const person = JSON.parse(localStorage.getItem('persons'));
    if (person) {
      this.array = person;
    }

    const byProd = JSON.parse(localStorage.getItem('by'));
    if (byProd) {
      this.byProduct = byProd;
    }
  }

  addPerson(): void {
    let person = JSON.parse(localStorage.getItem('persons'));
    if (!person) {
      person = [];
    }
    if (this.nameEnter == null) {
      return;
    } else {
      const newPerson = {
        name: this.nameEnter,
        description: this.descriptionEnter,
        length: this.lengthEnter
      };
      person.unshift(newPerson);
      localStorage.setItem('persons', JSON.stringify(person));
      this.array = person;
    }
  }

  //
  fun1(block, obj): void {
    block.style.background = 'black';
    block.style.color = 'green';
    block.style.borderRadius = '20px';
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === obj) {
        this.curShop = obj;
        this.array.splice(i, 1);
        localStorage.setItem('persons', JSON.stringify(this.array));
        let by = JSON.parse(localStorage.getItem('by'));
        if (!by) {
          by = [];
        }
        const byObj = {
          byName: obj.name,
          byDescription: obj.description,
          byLength: obj.length
        };
        this.byProduct = by;
        this.byProduct.unshift(byObj);
        localStorage.setItem('by', JSON.stringify(by));
      }
    }
  }

  //
  funDelete(obj): void {
    for (let del = 0; del < this.array.length; del++) {
      if (this.array[del] === obj) {
        this.array.splice(del, 1);
        localStorage.setItem('persons', JSON.stringify(this.array));
      }
    }
  }

  clear(): void {
    localStorage.removeItem('by');
  }
}
