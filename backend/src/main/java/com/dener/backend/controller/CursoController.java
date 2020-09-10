package com.dener.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dener.backend.exception.ResourceNotFoundException;
import com.dener.backend.model.Curso;
import com.dener.backend.repository.CursoRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class CursoController {

	@Autowired
	private CursoRepository cursoRepository;

	@GetMapping("/cursos")
	public List<Curso> getAllCursos() {
		return cursoRepository.findAll();
	}

	@GetMapping("/cursos/{id}")
	public ResponseEntity<Curso> getCursoById(@PathVariable(value = "id") Long cursoId)
			throws ResourceNotFoundException {
		Curso curso = cursoRepository.findById(cursoId)
				.orElseThrow(() -> new ResourceNotFoundException("Curso not found for this id :: " + cursoId));
		return ResponseEntity.ok().body(curso);
	}

	@PostMapping("/cursos")
	public Curso createCurso(@Validated @RequestBody Curso curso) {
		return cursoRepository.save(curso);
	}

	@PutMapping("/cursos/{id}")
	public ResponseEntity<Curso> updateCurso(@PathVariable(value = "id") Long cursoId,
			@Validated @RequestBody Curso cursoDetails) throws ResourceNotFoundException {
		Curso curso = cursoRepository.findById(cursoId)
				.orElseThrow(() -> new ResourceNotFoundException("Curso not found for this id :: " + cursoId));

		curso.setNome(cursoDetails.getNome());
		curso.setTipo(cursoDetails.getTipo());
		curso.setDesc(cursoDetails.getDesc());
		final Curso updatedCurso = cursoRepository.save(curso);
		return ResponseEntity.ok(updatedCurso);
	}

	@DeleteMapping("/cursos/{id}")
	public Map<String, Boolean> deleteCurso(@PathVariable(value = "id") Long cursoId) throws ResourceNotFoundException {
		Curso curso = cursoRepository.findById(cursoId)
				.orElseThrow(() -> new ResourceNotFoundException("Curso not found for this id :: " + cursoId));

		cursoRepository.delete(curso);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
