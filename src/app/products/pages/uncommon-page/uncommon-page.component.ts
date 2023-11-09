import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect

  public name: string = 'Camilo';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  changeCliente() {
    this.name = 'Tefa';
    this.gender = 'female';
  }

  // i18nPlural

  public clients: Array<string> = ['Jaime', 'Sergio', 'Cristian', 'Ana', 'Isa'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  public deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Camilo',
    age: 27,
    address: 'Bello, Colombia'
  }


  //Async pipe 
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500)
  })

}
