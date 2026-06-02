package br.uniesp.si.techback.dto.auth;

import br.uniesp.si.techback.validation.CpfCnpj;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterRequestDTO {
    @NotBlank
    private String nome;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String senha;

    @CpfCnpj
    private String cpfCnpj;

    private String cep;
}
