package br.uniesp.si.techback.controller;

import br.uniesp.si.techback.dto.FilmeDTO;
import br.uniesp.si.techback.service.FilmeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping({"/api/v1/filmes", "/filmes"})
public class FilmeController {

    private final FilmeService service;

    @GetMapping
    public Page<FilmeDTO> listar(@RequestParam(required = false) String titulo, Pageable pageable) {
        log.debug("Listando filmes");
        return service.listar(titulo, pageable);
    }

    @GetMapping("/{id}")
    public FilmeDTO buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public FilmeDTO salvar(@Valid @RequestBody FilmeDTO dto) {
        return service.salvar(dto);
    }

    @PutMapping("/{id}")
    public FilmeDTO atualizar(@PathVariable Long id, @Valid @RequestBody FilmeDTO dto) {
        return service.atualizar(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
