package br.uniesp.si.techback.dto;

import br.uniesp.si.techback.model.CodigoPlano;
import lombok.*;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlanoDTO {
    private UUID id;
    private CodigoPlano codigo;
    private Integer limiteDiario;
    private Integer streamsSimultaneos;
}
