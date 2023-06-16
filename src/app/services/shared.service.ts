import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private datosSource = new Subject<any>();
  datos$ = this.datosSource.asObservable();

  sendDatos(datos: any) {
    // console.log('soy el servicio')
    this.datosSource.next(datos);
  }

  constructor() { }
}
