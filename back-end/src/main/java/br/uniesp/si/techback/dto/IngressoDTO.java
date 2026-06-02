package br.uniesp.si.techback.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IngressoDTO {
    private Long id;
    @NotNull
    private Long usuarioId;
    private String usuarioNome;
    @NotNull
    private Long sessaoId;
    private String filmeTitulo;
    private LocalDateTime compradoEm;
    private String numeroAssento;
}
