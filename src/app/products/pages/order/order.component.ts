import { Color, Hero } from './../interfaces/hero.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public isUpperCase:boolean = false;
  public heroes:Hero[]=[
    {
      name: 'superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    }
  ]
  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }
}
