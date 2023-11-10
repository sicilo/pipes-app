import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero-interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public heroes: Array<Hero> = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Acuaman',
      canFly: false,
      color: Color.yellow
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green lantern',
      canFly: true,
      color: Color.green
    }
  ]

  public isUpperCase: boolean = false;
  public selectedSort: keyof Hero = 'name';

  public toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder(sortBy: keyof Hero): void {
    this.selectedSort = sortBy;
  }
}
