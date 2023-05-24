import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent {

    //Récupère l'id de l'url 
    constructor(private activated: ActivatedRoute){
      this.activated.params.subscribe(
        (data) => {
          console.log(data)
        }
      )
    }
}
