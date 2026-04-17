import { Categoria } from "./categoria.model";

export type TipoTransacao = 'ENTRADA' | 'SAIDA';

export interface Transacao {
  id?: number;
  descricao: string;
  valor: number;
  data: string;
  tipo: TipoTransacao;
  categoria: Categoria;
}