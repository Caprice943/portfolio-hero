import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import { Engine, ISourceOptions } from '@tsparticles/engine';
import { loadStarsPreset } from '@tsparticles/preset-stars';

@Component({
  selector: 'app-stars-background',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './stars-background.component.html',
  styleUrl: './stars-background.component.scss'
})
export class StarsBackgroundComponent implements OnInit, OnDestroy {
  private reduceMotionMql?: MediaQueryList;

  constructor(
    private readonly ngParticles: NgParticlesService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Charge le preset "stars" une seule fois
    this.ngParticles.init(async (engine) => {
      await loadStarsPreset(engine);
    });
  }

  get isBrowser() { return isPlatformBrowser(this.platformId); }

  // Options initialisées, puis recalculées via updateOptions()
  options: ISourceOptions = {
    preset: 'stars',
    fullScreen: { enable: false },
    background: { color: 'transparent' }
  };

  ngOnInit(): void {
    if (!this.isBrowser) return;

    // 1) Premier calcul responsive
    this.updateOptions();

    // 2) Écoute prefers-reduced-motion
    this.reduceMotionMql = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.reduceMotionMql.addEventListener?.('change', this.updateOptions);
  }

  ngOnDestroy(): void {
    this.reduceMotionMql?.removeEventListener?.('change', this.updateOptions);
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.isBrowser) return;
    this.updateOptions();
  }

  // ---- Responsive logic ----
  // Petits écrans <768px, moyens <1280px, grands >=1280px
  private updateOptions = () => {
    const width = window.innerWidth || 1024;
    const height = window.innerHeight || 768;
    const reduce = this.reduceMotionMql?.matches ?? window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Breakpoints responsives
    let baseCount: number;
    let baseSpeed: number;

    if (width < 768) {               // mobile
      baseCount = 140;
      baseSpeed = 0.12;
    } else if (width < 1280) {       // tablette / laptop
      baseCount = 220;
      baseSpeed = 0.15;
    } else {                         // desktop
      baseCount = 320;
      baseSpeed = 0.18;
    }

    // Ajustement léger selon la surface d’écran (évite trop peu d’étoiles sur des écrans très hauts)
    const area = width * height;
    const areaFactor = Math.min(Math.max(area / (1280 * 720), 0.75), 1.35); // clamp 0.75–1.35
    let starCount = Math.round(baseCount * areaFactor);

    // Mode "reduce motion": on baisse densité, vitesse et interactivité
    const fpsLimit = reduce ? 30 : 60;
    const speed = reduce ? baseSpeed * 0.6 : baseSpeed;
    if (reduce) starCount = Math.round(starCount * 0.75);

    // Important: créer un NOUVEL objet pour que le binding [options] détecte le changement
    this.options = {
      preset: 'stars',
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      detectRetina: true,
      fpsLimit,
      interactivity: {
        events: {
          // On coupe les effets intrusifs si reduce-motion
          onHover: reduce ? { enable: false } : { enable: true, mode: 'repulse', parallax: { enable: true, force: 12, smooth: 20 } },
          // resize: true
        }
      },
      particles: {
        number: { value: starCount },
        move: { speed },
        opacity: { value: { min: 0.3, max: 1 } },
        size: { value: { min: 0.5, max: 1.8 } },
        color: { value: '#ffffff' }
      }
    };
  };
}
