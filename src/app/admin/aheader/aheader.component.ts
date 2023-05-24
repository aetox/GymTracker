import { Component } from '@angular/core';

@Component({
  selector: 'app-aheader',
  templateUrl: './aheader.component.html',
  styleUrls: ['./aheader.component.css']
})
export class AheaderComponent {

  menuVisible = false;
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

}
