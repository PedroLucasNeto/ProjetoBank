export interface ICliente {
  id: number;
  cpf: string;
  ativo?: boolean;
  nome: string;
  observacoes?: string;
  email: string;
}
