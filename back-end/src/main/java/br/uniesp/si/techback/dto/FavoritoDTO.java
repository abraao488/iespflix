package br.uniesp.si.techback.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FavoritoDTO {
    @NotNull
    private Long usuarioId;
    @NotNull
    private UUID conteudoId;
    private String usuarioNome;
    private String conteudoTitulo;
    private LocalDateTime criadoEm;
}
