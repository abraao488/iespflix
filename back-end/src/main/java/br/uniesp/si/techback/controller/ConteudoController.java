package br.uniesp.si.techback.controller;

import br.uniesp.si.techback.dto.ConteudoDTO;
import br.uniesp.si.techback.model.TipoConteudo;
import br.uniesp.si.techback.service.ConteudoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/conteudos")
public class ConteudoController {

    private final ConteudoService service;

    @GetMapping
    public Page<ConteudoDTO> listar(@RequestParam(required = false) TipoConteudo tipo,
                                    @RequestParam(required = false) String genero,
                                    @RequestParam(required = false) String q,
                                    Pageable pageable) {
        log.debug("Listando conteudos");
        return service.listar(tipo, genero, q, pageable);
    }

    @GetMapping("/{id}")
    public ConteudoDTO buscarPorId(@PathVariable UUID id) {
        return service.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ConteudoDTO salvar(@Valid @RequestBody ConteudoDTO dto) {
        return service.salvar(dto);
    }

    @PutMapping("/{id}")
    public ConteudoDTO atualizar(@PathVariable UUID id, @Valid @RequestBody ConteudoDTO dto) {
        return service.atualizar(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable UUID id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/top")
    public List<ConteudoDTO> top(@RequestParam(defaultValue = "5") int n) {
        return service.top(n);
    }

    @GetMapping("/apos/{ano}")
    public List<ConteudoDTO> lancadosApos(@PathVariable Integer ano) {
        return service.lancadosApos(ano);
    }
}
