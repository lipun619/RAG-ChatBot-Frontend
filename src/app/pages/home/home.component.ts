import { Component, OnInit, signal } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  stagger,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  animations: [
    trigger('heroEntrance', [
      transition(':enter', [
        query(
          '.animate-item',
          [
            style({ opacity: 0, transform: 'translateY(24px)' }),
            stagger(200, [
              animate(
                '600ms cubic-bezier(0.16, 1, 0.3, 1)',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  curiousChars = 'Curious Mind.'.split('');
  developerChars = 'Developer Brain.'.split('');
}
