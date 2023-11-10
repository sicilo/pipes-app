import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero-interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Array<Hero>, sortBy: keyof Hero | null): Array<Hero> {
    return sortBy == null
      ? heroes
      : heroes.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
  }

}
