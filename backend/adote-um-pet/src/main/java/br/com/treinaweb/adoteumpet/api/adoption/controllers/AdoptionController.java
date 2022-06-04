package br.com.treinaweb.adoteumpet.api.adoption.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.treinaweb.adoteumpet.api.adoption.dtos.AdoptionRequest;
import br.com.treinaweb.adoteumpet.api.adoption.dtos.AdoptionResponse;
import br.com.treinaweb.adoteumpet.api.adoption.mappers.AdoptionMapper;
import br.com.treinaweb.adoteumpet.core.repositories.AdoptionRepository;

@RestController
public class AdoptionController {

    @Autowired
    private AdoptionRepository adoptionRepository;

    @Autowired
    private AdoptionMapper adoptionMapper;

    @PostMapping("/api/adocoes")
    @ResponseStatus(code = HttpStatus.CREATED)
    public AdoptionResponse create(@RequestBody AdoptionRequest adoptionRequest) {
        var adoption = adoptionMapper.toModel(adoptionRequest);
        var createdAdoption = adoptionRepository.save(adoption);

        return adoptionMapper.toResponse(createdAdoption);
    }
}
