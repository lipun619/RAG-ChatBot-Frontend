import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  skills: string[] = [
    '.NET',
    'Angular',
    'TypeScript',
    'SQL',
    'Python',
    'AI',
    'C#',
    'JavaScript',
    'HTML/CSS',
    'Git',
  ];
}
