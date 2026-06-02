package br.uniesp.si.techback.controller;

import br.uniesp.si.techback.dto.IngressoDTO;
import br.uniesp.si.techback.service.IngressoService;
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
@RequestMapping({"/api/v1/ingressos", "/ingressos"})
public class IngressoController {

    private final IngressoService service;

    @GetMapping
    public List<IngressoDTO> listar() {
        log.debug("Listando ingressos");
        return service.listar();
    }

    @GetMapping("/{id}")
    public IngressoDTO buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public IngressoDTO salvar(@Valid @RequestBody IngressoDTO dto) {
        return service.salvar(dto);
    }

    @PutMapping("/{id}")
    public IngressoDTO atualizar(@PathVariable Long id, @Valid @RequestBody IngressoDTO dto) {
        return service.atualizar(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
