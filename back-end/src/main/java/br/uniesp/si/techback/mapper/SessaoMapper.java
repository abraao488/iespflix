package br.uniesp.si.techback.mapper;

import br.uniesp.si.techback.dto.SessaoDTO;
import br.uniesp.si.techback.model.Sessao;
import org.springframework.stereotype.Component;

@Component
public class SessaoMapper {

    public SessaoDTO toDTO(Sessao entity) {
        return SessaoDTO.builder()
                .id(entity.getId())
                .filmeId(entity.getFilme().getId())
                .filmeTitulo(entity.getFilme().getTitulo())
                .dataHora(entity.getDataHora())
                .sala(entity.getSala())
                .capacidadeTotal(entity.getCapacidadeTotal())
                .precoIngresso(entity.getPrecoIngresso())
                .build();
    }
}
