import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.component.html',
  styleUrls: ['./update-curso.component.css']
})
export class UpdateCursoComponent implements OnInit {

  id: number;
  curso: Curso;
  submitted: true;

  constructor(private route: ActivatedRoute, private router: Router,
    private cursoService: CursoService) { }

  ngOnInit() {
    this.curso = new Curso();

    this.id = this.route.snapshot.params['id'];

    this.cursoService.getCurso(this.id)
      .subscribe(data => {
        console.log(data)
        this.curso = data;
      }, error => console.log(error));
  }

  updateCurso() {
    this.cursoService.updateCurso(this.id, this.curso)
      .subscribe(data => {
        console.log(data);
        this.curso = new Curso();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCurso();
  }

  gotoList() {
    this.router.navigate(['/cursos']);
  }
}
