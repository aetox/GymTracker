import { Component } from '@angular/core';

@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.css']
})
export class PheaderComponent {
  
  // Permet d'afficher le menu pour appareil mobile lors du click
  menuVisible = false;
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

}
