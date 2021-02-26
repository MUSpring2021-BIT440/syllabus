import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.scss']
})
export class SuperHeroComponent implements OnInit {

  bestSuperHero = "Iron Man";

  constructor() { }

  ngOnInit(): void {
    console.log("Super Hero Component has been init'd");
  }

}
