import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CreateCursoComponent } from './create-curso/create-curso.component';
import { UpdateCursoComponent } from './update-curso/update-curso.component';
import { CursoDetailsComponent } from './curso-details/curso-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  { path: 'cursos', component: CursoListComponent },
  { path: 'add', component: CreateCursoComponent },
  { path: 'update/:id', component: UpdateCursoComponent },
  { path: 'details/:id', component: CursoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
