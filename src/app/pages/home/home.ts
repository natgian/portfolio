import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Hero } from '../../features/hero/hero';
import { About } from '../../features/about/about';
import { Skills } from '../../features/skills/skills';
import { Projects } from '../../features/projects/projects';
import { References } from '../../features/references/references';
import { Contact } from '../../features/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, About, Skills, Projects, References, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

/**
 * Page component responsible for rendering the main page.
 */
export class Home {}
