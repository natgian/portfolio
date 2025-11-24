import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
