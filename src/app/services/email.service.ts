import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

// ─── Replace these with your actual EmailJS credentials ───
const SERVICE_ID = '[EMAILJS_SERVICE_ID]';
const TEMPLATE_ID = '[EMAILJS_TEMPLATE_ID]';
const PUBLIC_KEY = '[EMAILJS_PUBLIC_KEY]';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  async sendEmail(data: ContactFormData): Promise<void> {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
  }
}
