import { Injectable, signal, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<Theme>('dark');

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const saved = localStorage.getItem('portfolio-theme') as Theme | null;
      if (saved === 'light' || saved === 'dark') {
        this.theme.set(saved);
      }
      this.applyTheme(this.theme());
    }
  }

  toggle(): void {
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.applyTheme(next);
    if (this.isBrowser) {
      localStorage.setItem('portfolio-theme', next);
    }
  }

  private applyTheme(theme: Theme): void {
    if (!this.isBrowser) return;
    document.documentElement.setAttribute('data-theme', theme);
  }
}
