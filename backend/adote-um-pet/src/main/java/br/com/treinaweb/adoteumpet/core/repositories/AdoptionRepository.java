package br.com.treinaweb.adoteumpet.core.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.treinaweb.adoteumpet.core.models.Adoption;

public interface AdoptionRepository extends JpaRepository<Adoption, Long> {

}
