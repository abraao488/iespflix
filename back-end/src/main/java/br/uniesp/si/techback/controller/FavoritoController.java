package br.uniesp.si.techback.controller;

import br.uniesp.si.techback.dto.FavoritoDTO;
import br.uniesp.si.techback.service.FavoritoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/favoritos")
public class FavoritoController {

    private final FavoritoService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public FavoritoDTO adicionar(@Valid @RequestBody FavoritoDTO dto) {
        return service.adicionar(dto);
    }

    @DeleteMapping("/{usuarioId}/{conteudoId}")
    public ResponseEntity<Void> remover(@PathVariable Long usuarioId, @PathVariable UUID conteudoId) {
        service.remover(usuarioId, conteudoId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<FavoritoDTO> listarPorUsuario(@PathVariable Long usuarioId) {
        return service.listarPorUsuario(usuarioId);
    }
}
