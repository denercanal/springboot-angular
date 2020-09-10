import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos: Observable<Curso[]>;

  constructor(private cursoService: CursoService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.cursos = this.cursoService.getCursosList();
  }

  deleteCurso(id: number) {
    this.cursoService.deleteCurso(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    },
      error => console.log(error));
  }
  cursoDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
