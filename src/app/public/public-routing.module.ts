import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { ContactComponent } from './contact/contact.component';
import { PlayoutComponent } from './playout/playout.component';


const routes: Routes = [

  {
    path:'',
    component: PlayoutComponent,
    children: [
      {
        // si le chemin est vide redirection vers la page home
        path:'',redirectTo:'home',pathMatch:'full'
        //PathMatch à quoi sert-il ?
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'training',
        component: TrainingComponent
      },
      {
        path:'contact',
        component: ContactComponent
      }
    ]
  }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
