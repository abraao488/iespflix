package br.uniesp.si.techback.mapper;

import br.uniesp.si.techback.dto.IngressoDTO;
import br.uniesp.si.techback.model.Ingresso;
import org.springframework.stereotype.Component;

@Component
public class IngressoMapper {

    public IngressoDTO toDTO(Ingresso entity) {
        return IngressoDTO.builder()
                .id(entity.getId())
                .usuarioId(entity.getUsuario().getId())
                .usuarioNome(entity.getUsuario().getNome())
                .sessaoId(entity.getSessao().getId())
                .filmeTitulo(entity.getSessao().getFilme().getTitulo())
                .compradoEm(entity.getCompradoEm())
                .numeroAssento(entity.getNumeroAssento())
                .build();
    }
}
