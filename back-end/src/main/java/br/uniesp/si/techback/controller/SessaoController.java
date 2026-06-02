package br.uniesp.si.techback.controller;

import br.uniesp.si.techback.dto.SessaoDTO;
import br.uniesp.si.techback.service.SessaoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping({"/api/v1/sessoes", "/sessoes"})
public class SessaoController {

    private final SessaoService service;

    @GetMapping
    public List<SessaoDTO> listar() {
        log.debug("Listando sessoes");
        return service.listar();
    }

    @GetMapping("/{id}")
    public SessaoDTO buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SessaoDTO salvar(@Valid @RequestBody SessaoDTO dto) {
        return service.salvar(dto);
    }

    @PutMapping("/{id}")
    public SessaoDTO atualizar(@PathVariable Long id, @Valid @RequestBody SessaoDTO dto) {
        return service.atualizar(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
