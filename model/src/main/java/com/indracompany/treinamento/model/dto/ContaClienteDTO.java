package com.indracompany.treinamento.model.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class ContaClienteDTO {
	
	private String nomeCliente;
	private String cpf;
	private String agencia;
	private String numero;

}
