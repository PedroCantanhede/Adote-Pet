package br.com.treinaweb.adoteumpet.api.adoption.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.treinaweb.adoteumpet.api.adoption.dtos.AdoptionRequest;
import br.com.treinaweb.adoteumpet.api.adoption.dtos.AdoptionResponse;
import br.com.treinaweb.adoteumpet.api.adoption.mappers.AdoptionMapper;
import br.com.treinaweb.adoteumpet.core.repositories.AdoptionRepository;

@Service
public class AdoptionService {

    @Autowired
    private AdoptionRepository adoptionRepository;

    @Autowired
    private AdoptionMapper adoptionMapper;

    public AdoptionResponse create(AdoptionRequest adoptionRequest) {
        var adoptionToCreate = adoptionMapper.toModel(adoptionRequest);
        var createdAdoption = adoptionRepository.save(adoptionToCreate);
        return adoptionMapper.toResponse(createdAdoption);
    }

    public List<AdoptionResponse> findAll() {
        return adoptionRepository.findAll()
                .stream()
                .map(adoptionMapper::toResponse)
                .toList();
    }
}
