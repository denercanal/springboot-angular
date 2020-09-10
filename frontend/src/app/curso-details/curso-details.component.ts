import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit {

  id: number;
  curso: Curso;

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

  list() {
    this.router.navigate(['cursos']);
  }

}
