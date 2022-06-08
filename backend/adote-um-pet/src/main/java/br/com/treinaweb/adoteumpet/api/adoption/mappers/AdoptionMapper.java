package br.com.treinaweb.adoteumpet.api.adoption.mappers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.treinaweb.adoteumpet.api.adoption.dtos.AdoptionRequest;
import br.com.treinaweb.adoteumpet.api.adoption.dtos.AdoptionResponse;
import br.com.treinaweb.adoteumpet.api.pet.mappers.PetMapper;
import br.com.treinaweb.adoteumpet.core.models.Adoption;
import br.com.treinaweb.adoteumpet.core.repositories.PetRepository;

@Component
public class AdoptionMapper {

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private PetMapper petMapper;

    public Adoption toModel(AdoptionRequest adoptionRequest) {
        return Adoption.builder()
                .email(adoptionRequest.getEmail())
                .price(adoptionRequest.getPrice())
                .pet(petRepository.findByIdOrElseThrow(adoptionRequest.getPetId()))
                .build();
    }

    public AdoptionResponse toResponse(Adoption adoption) {
        return AdoptionResponse.builder()
                .id(adoption.getId())
                .email(adoption.getEmail())
                .price(adoption.getPrice())
                .pet(petMapper.toResponse(adoption.getPet()))
                .build();
    }

}
