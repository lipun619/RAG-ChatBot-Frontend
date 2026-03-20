import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  simpleGithub,
  simpleLinkedin,
} from '@ng-icons/simple-icons';
import {
  heroArrowDownTray,
} from '@ng-icons/heroicons/outline';
import { EmailService } from '../../services/email.service';
import { FadeInDirective } from '../../directives/fade-in.directive';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIconComponent, FadeInDirective],
  viewProviders: [
    provideIcons({ simpleGithub, simpleLinkedin, heroArrowDownTray }),
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  status = signal<FormStatus>('idle');
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.status.set('sending');

    try {
      await this.emailService.sendEmail(this.contactForm.value);
      this.status.set('success');
      this.contactForm.reset();

      // Reset status after 4 seconds
      setTimeout(() => this.status.set('idle'), 4000);
    } catch {
      this.status.set('error');
      setTimeout(() => this.status.set('idle'), 4000);
    }
  }
}
