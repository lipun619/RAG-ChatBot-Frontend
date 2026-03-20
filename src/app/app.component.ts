import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FadeInDirective } from './directives/fade-in.directive';
import { ChatWidgetComponent } from '@caplipun/ai-chat-widget';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FadeInDirective,
    ChatWidgetComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
