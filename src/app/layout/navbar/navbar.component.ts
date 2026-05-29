import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOpen=false;
  constructor(private router:Router){}

  get isHome():boolean
  {
    return this.router.url==='/' || this.router.url==='/home';
  } 

  toggleMenu()
  {
    this.menuOpen=!this.menuOpen;
}

}
