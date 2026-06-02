package br.uniesp.si.techback.dto;

import br.uniesp.si.techback.model.TipoConteudo;
import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConteudoDTO {
    private UUID id;
    @NotBlank
    @Size(max = 200)
    private String titulo;
    @NotNull
    private TipoConteudo tipo;
    @NotNull
    @Min(1888)
    @Max(2100)
    private Integer ano;
    @NotNull
    @Min(1)
    @Max(999)
    private Integer duracaoMinutos;
    @NotNull
    @DecimalMin("0.00")
    @DecimalMax("99.99")
    private BigDecimal relevancia;
    private String sinopse;
    private String trailerUrl;
    private String posterUrl;
    private String genero;
    private LocalDateTime criadoEm;
    private LocalDateTime atualizadoEm;
}
