package br.uniesp.si.techback.controller;

import br.uniesp.si.techback.dto.PlanoDTO;
import br.uniesp.si.techback.model.CodigoPlano;
import br.uniesp.si.techback.service.PlanoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/planos")
public class PlanoController {

    private final PlanoService service;

    @GetMapping
    public List<PlanoDTO> listar() {
        return service.listar();
    }

    @GetMapping("/{codigo}")
    public PlanoDTO buscarPorCodigo(@PathVariable CodigoPlano codigo) {
        return service.buscarPorCodigo(codigo);
    }
}
