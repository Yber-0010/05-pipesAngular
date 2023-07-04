import { Pipe, PipeTransform } from '@angular/core';

// iber | toggleCase = 'IBER'
// IBER | toggleCase = 'iber'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform( value: any, toUpper: boolean = false ): string {
    console.log({value,toUpper})
    return (toUpper) ? value.toUpperCase() : value.toLowerCase() ;
  }
}
