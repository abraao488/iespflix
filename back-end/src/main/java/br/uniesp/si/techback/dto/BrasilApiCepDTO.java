package br.uniesp.si.techback.dto;

import lombok.Data;

@Data
public class BrasilApiCepDTO {
    private String cep;
    private String state;
    private String city;
    private String neighborhood;
    private String street;
    private String service;
}
