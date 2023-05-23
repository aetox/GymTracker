import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EIndexComponent } from './e-index/e-index.component';
import { EEditComponent } from './e-edit/e-edit.component';
import { EAddComponent } from './e-add/e-add.component';
import { EDeleteComponent } from './e-delete/e-delete.component';

const routes: Routes = [
  {
    path:'',
    component: EIndexComponent
  },
  {
    // /:id => Permet d'ajouter un lien dynamique avec comme param : id
    path:'edit/:id',
    component: EEditComponent
  },
  {
    path:'add',
    component: EAddComponent
  },
  {
    path:'delete/:id',
    component: EDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }
