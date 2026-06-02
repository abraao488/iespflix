package br.uniesp.si.techback.dto;

import br.uniesp.si.techback.model.CodigoPlano;
import br.uniesp.si.techback.model.StatusAssinatura;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssinaturaDTO {
    private UUID id;
    @NotNull
    private Long usuarioId;
    private String usuarioNome;
    @NotNull
    private CodigoPlano planoCodigo;
    private StatusAssinatura status;
    private LocalDateTime iniciadaEm;
    private LocalDateTime canceladaEm;
}
