import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Animation, createAnimation } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngAfterViewInit() {
    this.moveTitleAnimation();
  }

  moveTitleAnimation() {
    const titleElement = document.querySelector('.title-home') as HTMLElement;

    const animation = createAnimation()
      .addElement(titleElement)
      .duration(5500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(-400px)', 'translateX(600px)')
      .fromTo('opacity','5','0.4');
    animation.play();

  }


}
