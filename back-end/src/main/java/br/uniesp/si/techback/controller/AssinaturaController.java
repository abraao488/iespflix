package br.uniesp.si.techback.controller;

import br.uniesp.si.techback.dto.AssinaturaDTO;
import br.uniesp.si.techback.model.StatusAssinatura;
import br.uniesp.si.techback.service.AssinaturaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/assinaturas")
public class AssinaturaController {

    private final AssinaturaService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AssinaturaDTO criar(@Valid @RequestBody AssinaturaDTO dto) {
        return service.criar(dto);
    }

    @PutMapping("/{id}/cancelar")
    public AssinaturaDTO cancelar(@PathVariable UUID id) {
        return service.cancelar(id);
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<AssinaturaDTO> buscarPorUsuario(@PathVariable Long usuarioId) {
        return service.buscarPorUsuario(usuarioId);
    }

    @GetMapping("/status/{status}")
    public List<AssinaturaDTO> buscarPorStatus(@PathVariable StatusAssinatura status) {
        return service.buscarPorStatus(status);
    }
}
