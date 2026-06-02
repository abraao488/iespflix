package br.uniesp.si.techback.controller;

import br.uniesp.si.techback.client.BrasilApiClient;
import br.uniesp.si.techback.dto.BancoDTO;
import br.uniesp.si.techback.dto.BrasilApiCepDTO;
import br.uniesp.si.techback.dto.FeriadoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class BrasilApiController {

    private final BrasilApiClient client;

    @GetMapping("/feriados/{ano}")
    public List<FeriadoDTO> buscarFeriados(@PathVariable int ano) {
        return client.buscarFeriados(ano);
    }

    @GetMapping("/bancos")
    public List<BancoDTO> listarBancos() {
        return client.listarBancos();
    }

    @GetMapping("/cep/{cep}")
    public BrasilApiCepDTO buscarCep(@PathVariable String cep) {
        return client.buscarCep(cep);
    }
}
