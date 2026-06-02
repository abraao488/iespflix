package br.uniesp.si.techback.client;

import br.uniesp.si.techback.dto.BancoDTO;
import br.uniesp.si.techback.dto.BrasilApiCepDTO;
import br.uniesp.si.techback.dto.FeriadoDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "brasilApiClient", url = "${brasilapi.url:https://brasilapi.com.br/api}")
public interface BrasilApiClient {

    @GetMapping("/feriados/v1/{ano}")
    List<FeriadoDTO> buscarFeriados(@PathVariable("ano") int ano);

    @GetMapping("/cep/v2/{cep}")
    BrasilApiCepDTO buscarCep(@PathVariable("cep") String cep);

    @GetMapping("/banks/v1")
    List<BancoDTO> listarBancos();
}
