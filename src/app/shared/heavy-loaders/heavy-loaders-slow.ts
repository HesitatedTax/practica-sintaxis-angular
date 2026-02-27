import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Title } from '@shared/title/title';


@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-150', cssClass]">
      Heavy Loader Slow
    </section>
  `
})
export class HeavyLoadersSlow {

  @Input({required:true}) cssClass!: string;

  constructor(){

    const start = Date.now();
    while(Date.now()- start < 3000 ){}

    console.log('cargado');


  }


}
