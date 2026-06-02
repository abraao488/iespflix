package br.uniesp.si.techback.dto.auth;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponseDTO {
    private String token;
    private String tipo;
    private Long usuarioId;
    private String nome;
    private String email;
    private String plano;
}
