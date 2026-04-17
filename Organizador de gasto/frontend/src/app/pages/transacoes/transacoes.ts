import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransacaoService } from '../../services/transacao.service';
import { Transacao, TipoTransacao } from '../../models/transacao.model';
import { Categoria } from '../../models/categoria.model';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-transacoes',
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './transacoes.html',
  styleUrl: './transacoes.scss',
})
export class TransacoesComponent implements OnInit {
  transacoes: Transacao[] = [];
  categorias: Categoria[] = [];

  novaTransacao: Transacao = {
    valor: 0,
    descricao: '',
    data: '',
    tipo: null as any,
    categoria: null as any,
  };

  tipos = [
    { label: 'Receita', value: 'ENTRADA' },
    { label: 'Despesa', value: 'SAIDA' },
  ];

  getClasse(tipo: string): string {
    return tipo === 'ENTRADA' ? 'entrada' : 'saida';
  }

  constructor(private service: TransacaoService) {}

  ngOnInit(): void {
    this.loadTransacoes();
    this.loadCategorias();
  }

  loadTransacoes() {
    this.service.getTransacoes().subscribe((data) => {
      this.transacoes = [...data];
    });
  }

  loadCategorias() {
    this.service.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  salvar() {
    if (!this.novaTransacao.tipo || !this.novaTransacao.categoria) {
      alert('Selecione tipo e categoria');
      return;
    }
    this.service.createTransacao(this.novaTransacao).subscribe(() => {
      this.loadTransacoes();

      this.novaTransacao = {
        valor: 0,
        descricao: '',
        data: '',
        tipo: null as any,
        categoria: null as any,
      };
    });
  }
}
