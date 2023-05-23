import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
      path:'',
      component: AlayoutComponent, children : [
        {
          //Redirection vers dashboard lorsque on arrive dans admin. pathMatc:'full' = liens complet 
          path:'', redirectTo: 'dashboard', pathMatch:'full'
        },
        {
          path:'dashboard',
          component: DashboardComponent
        },
        {
          // permet d'importer les elements du module Users
          path:'users', loadChildren: () => import('./users/users.module')
          .then(m=>m.UsersModule)
        },
        {
          path:'exercices', loadChildren: () => import('./exercices/exercices.module')
          .then(m=>m.ExercicesModule)
        }
      ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
