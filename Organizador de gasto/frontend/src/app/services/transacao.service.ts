import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Transacao } from '../models/transacao.model';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  private useMock = true;

  private apiTransacoes = 'http://localhost:8080/api/transacoes';
  private apiCategorias = 'http://localhost:8080/api/categorias';

  private transacoesMock: Transacao[] = [
    {
      id: 1,
      valor: 1000,
      descricao: 'Salário',
      data: '2026-04-16',
      tipo: 'ENTRADA',
      categoria: { id: 1, nome: 'Salário' },
    },
  ];

  private categoriasMock: Categoria[] = [
    { id: 1, nome: 'Salário' },
    { id: 2, nome: 'Alimentação' },
    { id: 3, nome: 'Lazer' },
  ];

  constructor(private http: HttpClient) {}

  getTransacoes(): Observable<Transacao[]> {
    if (this.useMock) {
      return of(this.transacoesMock);
    }
    return this.http.get<Transacao[]>(this.apiTransacoes);
  }

  createTransacao(transacao: Transacao): Observable<Transacao> {
    if (this.useMock) {
      const nova = {
        ...transacao,
        id: Date.now(),
      };

      this.transacoesMock.push(nova);

      return of(nova);
    }
    return this.http.post<Transacao>(this.apiTransacoes, transacao);
  }

  getCategorias(): Observable<Categoria[]> {
    if (this.useMock) {
      return of(this.categoriasMock);
    }
    return this.http.get<Categoria[]>(this.apiCategorias);
  }
}
