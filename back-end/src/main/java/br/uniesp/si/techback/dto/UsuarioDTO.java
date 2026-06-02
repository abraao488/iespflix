package br.uniesp.si.techback.dto;

import br.uniesp.si.techback.validation.CpfCnpj;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioDTO {
    private Long id;
    @NotBlank
    private String nome;
    @Email
    @NotBlank
    private String email;
    @CpfCnpj
    private String cpfCnpj;
    private String cep;
    private String logradouro;
    private String bairro;
    private String cidade;
    private String estado;
}
