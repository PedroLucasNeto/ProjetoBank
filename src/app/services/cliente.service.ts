import { ICliente } from './../interfaces/cliente';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private api = `${environment.url}/clientes/`;
  constructor(private httpClient: HttpClient) { }

  buscarTodosClientes(){
    return this.httpClient.get<ICliente[]>(this.api);

  }
}
