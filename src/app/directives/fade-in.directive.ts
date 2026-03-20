import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Input,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements OnInit, OnDestroy {
  /** Delay in ms before the animation starts after intersection */
  @Input() fadeDelay = 0;

  private observer: IntersectionObserver | null = null;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    const element = this.el.nativeElement;

    // Set initial hidden state
    element.style.opacity = '0';
    element.style.transform = 'translateY(32px)';
    element.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    element.style.transitionDelay = `${this.fadeDelay}ms`;

    if (!this.isBrowser) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
