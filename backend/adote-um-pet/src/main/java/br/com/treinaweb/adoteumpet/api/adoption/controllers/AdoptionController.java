package br.com.treinaweb.adoteumpet.api.adoption.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.treinaweb.adoteumpet.api.adoption.dtos.AdoptionRequest;
import br.com.treinaweb.adoteumpet.api.adoption.dtos.AdoptionResponse;
import br.com.treinaweb.adoteumpet.api.adoption.services.AdoptionService;

@RestController
@RequestMapping("/api/adocoes")
public class AdoptionController {

    @Autowired
    private AdoptionService adoptionService;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public AdoptionResponse create(@RequestBody @Valid AdoptionRequest adoptionRequest) {
        return adoptionService.create(adoptionRequest);
    }

    @GetMapping
    public List<AdoptionResponse> findAll() {
        return adoptionService.findAll();
    }
}
