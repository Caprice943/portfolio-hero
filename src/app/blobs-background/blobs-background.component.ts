import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

type BlobSpec = {
  left: number;   // en %
  top: number;    // en %
  size: number;   // en vmin
  hue: number;    // 0-360
  dur: number;    // durée anim en s
  delay: number;  // délai anim en s
};

@Component({
  selector: 'app-blobs-background',
  standalone: true,
  imports: [],
  templateUrl: './blobs-background.component.html',
  styleUrl: './blobs-background.component.scss'
})
export class BlobsBackgroundComponent implements OnInit {

  blobs: BlobSpec[] = [];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get isBrowser() { return isPlatformBrowser(this.platformId); }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    // ⚙️ Configure ici le nombre de blobs et leur plage de paramètres
    const count = 8; // 6–10 donne un rendu sympa
    const minSize = 22, maxSize = 36; // en vmin
    const minDur = 20, maxDur = 32;   // en s
    const hues = [210, 260, 320, 180]; // palette (bleu, violet, rose, menthe)

    const rnd = (a: number, b: number) => a + Math.random() * (b - a);
    const rndi = (a: number, b: number) => Math.floor(rnd(a, b));

    for (let i = 0; i < count; i++) {
      const left = rnd(6, 88);
      const top = rnd(8, 86);
      const size = rnd(minSize, maxSize);
      const hue = hues[rndi(0, hues.length)];
      const dur = rnd(minDur, maxDur);
      const delay = -rnd(0, dur); // décalage pour éviter la synchro
      this.blobs.push({ left, top, size, hue, dur, delay });
    }

    // Optionnel : repositionne aléatoirement un blob toutes les X secondes pour un paysage “vivant”
    // (décommente si tu veux ce comportement)
    /*
    setInterval(() => {
      const i = rndi(0, this.blobs.length);
      this.blobs[i] = {
        ...this.blobs[i],
        left: rnd(6, 88),
        top: rnd(8, 86),
        hue: hues[rndi(0, hues.length)],
        delay: -rnd(0, this.blobs[i].dur)
      };
      // Angular détecte la mutation (remplacement de l'objet)
      this.blobs = [...this.blobs];
    }, 8000);
    */
  }


}
