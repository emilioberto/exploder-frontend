import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/components/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {

  activeItemIndex = 1;

  constructor() {
    super();
  }

  onInit(): void { }

  onDestroy(): void { }

  onClick(a: string): void {

  }

}
