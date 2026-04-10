import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from './footer/footer';
import { Services } from "./services/services";
import { About } from "./about/about";
import { Team } from "./team/team";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Services, About, Team, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Old-Age-Home');
}
