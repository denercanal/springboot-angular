import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css']
})
export class CreateCursoComponent implements OnInit {
  curso: Curso = new Curso();
  submitted = false;

  constructor(private cursoService: CursoService,
    private router: Router) { }

  ngOnInit() {
  }

  newCurso(): void {
    this.submitted = false;
    this.curso = new Curso();
  }

  save() {
    this.cursoService.createCurso(this.curso).subscribe(data => {
      console.log(data)
      this.curso = new Curso();
      this.gotoList();
    },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/cursos']);
  }

}
