import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor(private heroService: HeroService) {}
  heroes: Hero[] = [];
  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;

}
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
ngOnInit(): void {
  this.getHeroes();
}

}
