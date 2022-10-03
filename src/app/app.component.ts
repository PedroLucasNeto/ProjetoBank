import { IContas } from './interfaces/conta';
import { ContaService } from './services/conta.service';
import { ICliente } from './interfaces/cliente';
import { ClienteService } from './services/cliente.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treinamento-angular-bancoIndra';
  clientes: ICliente[] = [];
  contas: IContas[] = [];

  constructor(private clienteService: ClienteService, private contaService: ContaService) {
    this.buscarTodosClientes();
    this.buscarTodasContas();
  }

  buscarTodosClientes() {
    this.clienteService.buscarTodosClientes().subscribe((clientes: ICliente[]) => {
      this.clientes = clientes;
      console.log(this.clientes);
    })
  }


  buscarTodasContas() {
    this.contaService.buscarTodasContas().subscribe((contas: IContas[]) => {
      this.contas = contas;
      console.log(this.contas);
    })
  }

}
