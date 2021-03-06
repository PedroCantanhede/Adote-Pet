package br.com.treinaweb.adoteumpet.api.adoption.dtos;

import java.math.BigDecimal;

import br.com.treinaweb.adoteumpet.api.pet.dtos.PetResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdoptionResponse {

    private Long id;

    private String email;

    private BigDecimal price;

    private PetResponse pet;
}
