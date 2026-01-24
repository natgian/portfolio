import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

/**
 * Root component of the application.
 * Hosts the router outlet for all routed views.
 */
export class App {}
