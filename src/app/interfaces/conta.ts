import { ICliente } from './cliente';
export interface IContas {

  id: number;
  agencia: string;
  numero: string;
  saldo: number;
  cliente: ICliente;


}
