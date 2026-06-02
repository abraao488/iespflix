package br.uniesp.si.techback.dto;

import jakarta.validation.constraints.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FilmeDTO {
    private Long id;
    @NotBlank
    private String titulo;
    @NotBlank
    private String genero;
    @NotNull
    @Min(1888)
    @Max(2100)
    private Integer ano;
    @NotNull
    @Min(1)
    private Integer duracaoMinutos;
    private String sinopse;
}
