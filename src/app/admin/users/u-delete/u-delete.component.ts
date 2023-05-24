import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-delete',
  templateUrl: './u-delete.component.html',
  styleUrls: ['./u-delete.component.css']
})
export class UDeleteComponent {

  constructor(private activated: ActivatedRoute){
    this.activated.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
}
