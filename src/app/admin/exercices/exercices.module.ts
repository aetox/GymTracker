import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { EIndexComponent } from './e-index/e-index.component';
import { EAddComponent } from './e-add/e-add.component';
import { EEditComponent } from './e-edit/e-edit.component';
import { EDeleteComponent } from './e-delete/e-delete.component';


@NgModule({
  declarations: [
    EIndexComponent,
    EAddComponent,
    EEditComponent,
    EDeleteComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule
  ]
})
export class ExercicesModule { }
