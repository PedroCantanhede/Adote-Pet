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
        var adoption = new Adoption();
        adoption.setEmail(adoptionRequest.getEmail());
        adoption.setPrice(adoptionRequest.getPrice());
        adoption.setPet(petRepository.findByIdOrElseThrow(adoptionRequest.getPetId()));
        return adoption;
    }

    public AdoptionResponse toResponse(Adoption adoption) {
        var adoptionResponse = new AdoptionResponse();
        adoptionResponse.setId(adoption.getId());
        adoptionResponse.setEmail(adoption.getEmail());
        adoptionResponse.setPrice(adoption.getPrice());
        adoptionResponse.setPet(petMapper.toResponse(adoption.getPet()));
        return adoptionResponse;
    }

}
