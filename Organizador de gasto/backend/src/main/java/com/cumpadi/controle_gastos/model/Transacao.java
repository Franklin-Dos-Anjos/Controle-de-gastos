//aqui é a classe Transacao, que representa uma transação financeira no sistema de controle de gastos. Ela possui os seguintes atributos:
//- id: um identificador único para cada transação, gerado automaticamente pelo banco de dados.
//- valor: o valor da transação, representado como um número decimal.
// - Teste 

package com.cumpadi.controle_gastos.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "transacoes")
@Getter
@Setter

public class Transacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "valor", nullable = false)
    private Double valor;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "date")
    private LocalDate data;

    @Column(name = "categoria")
    private String categoria;

}
