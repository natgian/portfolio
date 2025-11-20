import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './features/hero/hero';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Hero, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
