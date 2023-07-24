import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})

export class canFlyPipe implements PipeTransform {
  /* en esta forma puede invertir la respuesta true a false y viseversa */
  transform(value: boolean, canFly: boolean = true) {
      if (value === !canFly) return 'no vuela';
      return 'vuela';
  }
   /* la siguiente solo convierte a vuela o no vuela si
   la variable anterior llega true o false
    */
  // transform(value: boolean): 'vuela'|'no vuela' {
  //   return value? 'vuela': 'no vuela'
  // }
}




