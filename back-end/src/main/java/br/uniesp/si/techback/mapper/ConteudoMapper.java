package br.uniesp.si.techback.mapper;

import br.uniesp.si.techback.dto.ConteudoDTO;
import br.uniesp.si.techback.model.Conteudo;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConteudoMapper {
    private final ModelMapper modelMapper;

    public Conteudo toEntity(ConteudoDTO dto) {
        return modelMapper.map(dto, Conteudo.class);
    }

    public ConteudoDTO toDTO(Conteudo entity) {
        return modelMapper.map(entity, ConteudoDTO.class);
    }
}
