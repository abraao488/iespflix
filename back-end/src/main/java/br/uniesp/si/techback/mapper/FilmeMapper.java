package br.uniesp.si.techback.mapper;

import br.uniesp.si.techback.dto.FilmeDTO;
import br.uniesp.si.techback.model.Filme;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class FilmeMapper {
    private final ModelMapper modelMapper;

    public Filme toEntity(FilmeDTO dto) {
        return modelMapper.map(dto, Filme.class);
    }

    public FilmeDTO toDTO(Filme entity) {
        return modelMapper.map(entity, FilmeDTO.class);
    }
}
