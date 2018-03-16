import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService, private meta: Meta) { }

  ngOnInit() {
    this.getHeroes();

    this.meta.updateTag({ name: 'twitter:card', content: 'SelimReza' });
    this.meta.updateTag({ name: 'twitter:site', content: 'SelimReza' });
    this.meta.updateTag({ name: 'twitter:title', content: 'SelimReza' });
    this.meta.updateTag({ name: 'twitter:description', content: 'SelimReza' });
    this.meta.updateTag({ name: 'twitter:image', content: 'SelimReza' });

    this.meta.updateTag({ property: 'og:type', content: 'SelimReza' });
    this.meta.updateTag({ property: 'og:site_name', content: 'SelimReza' });
    this.meta.updateTag({ property: 'og:title', content: 'SelimReza' });
    this.meta.updateTag({ property: 'og:description', content: 'SelimReza' });
    this.meta.updateTag({ property: 'og:image', content: 'SelimReza' });
    this.meta.updateTag({ property: 'og:url', content: 'SelimReza' });
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero(name)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero)
        .subscribe(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
        });
  }

}
