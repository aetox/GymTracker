import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-edit',
  templateUrl: './e-edit.component.html',
  styleUrls: ['./e-edit.component.css']
})
export class EEditComponent {
  
  constructor(private activated: ActivatedRoute){
    this.activated.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

}
