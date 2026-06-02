package br.uniesp.si.techback.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SessaoDTO {
    private Long id;
    @NotNull
    private Long filmeId;
    private String filmeTitulo;
    @NotNull
    private LocalDateTime dataHora;
    @NotBlank
    private String sala;
    @NotNull
    private Integer capacidadeTotal;
    @NotNull
    private Double precoIngresso;
}
