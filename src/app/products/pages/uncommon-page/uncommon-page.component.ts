import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  public name: string = 'Fernando';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    male:'invitarlo',
    female: 'invitarla'
  }

  public changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }
  /* plural i18 */
  public clients: string[] = ['maria','pedro','fernando','eduardo','melisa','natalia']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'hay 1 cliente esperando.',
    '=2': 'tenemos 2 clientes  esperando.',
    'other': 'tenemos # clientes esperando.',
  }
  public deleteClient():void{
    this.clients.shift();
  }
  /* keyvalue pipe */
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  }
  /* async pipe */
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
  );
  /* public promiseValue:Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve( 'tenemos data en la promesa' );
      console.log( 'Tenemos data en la promesa' );
      this.person.name="otro nombre"
    },3500);
  }) */

}
