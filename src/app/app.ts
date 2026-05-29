import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EsmeraldaGourmet');
  
}
