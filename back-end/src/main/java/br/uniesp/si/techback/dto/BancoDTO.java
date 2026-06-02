package br.uniesp.si.techback.dto;

import lombok.Data;

@Data
public class BancoDTO {
    private String ispb;
    private String name;
    private Integer code;
    private String fullName;
}
