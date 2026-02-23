import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F'

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
})
export default class ControlFlow {

  showContent = signal(false);
  grade = signal('A')
  frameWorks = signal(['Angular','Vue','Svelte', 'Qwik','React'])
  frameWorks2 = signal([])

  toggleContent(){
    this.showContent.update(value => !value)
  }




}
