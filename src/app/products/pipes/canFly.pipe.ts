import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})

export class canFlyPipe implements PipeTransform {
  transform(value: any, canFly: boolean = true) {
      if (value === !canFly) return 'no vuela';
      return 'vuela';
  }
}
