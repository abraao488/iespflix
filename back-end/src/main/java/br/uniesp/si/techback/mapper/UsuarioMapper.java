package br.uniesp.si.techback.mapper;

import br.uniesp.si.techback.dto.UsuarioDTO;
import br.uniesp.si.techback.model.Usuario;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UsuarioMapper {
    private final ModelMapper modelMapper;

    public Usuario toEntity(UsuarioDTO dto) {
        return modelMapper.map(dto, Usuario.class);
    }

    public UsuarioDTO toDTO(Usuario entity) {
        return modelMapper.map(entity, UsuarioDTO.class);
    }
}
