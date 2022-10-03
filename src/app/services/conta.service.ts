import { IContas } from '../interfaces/conta';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private api = `${environment.url}/contas/`;
  constructor(private httpClient: HttpClient) { }

  buscarTodasContas(){
    return this.httpClient.get<IContas[]>(this.api);

  }
}
