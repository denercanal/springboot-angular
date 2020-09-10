package com.dener.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dener.backend.model.Curso;
@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {

}
