package com.dener.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dener.backend.model.Curso;
import com.dener.backend.repository.CursoRepository;

@RestController
@RequestMapping("/api/v1/")
public class CursoController {

	@Autowired
	private CursoRepository cursoRepository;
	
	//get all cursos
	@GetMapping("/cursos")
	public List<Curso> getAllCursos(){
		return cursoRepository.findAll();
	}
}
