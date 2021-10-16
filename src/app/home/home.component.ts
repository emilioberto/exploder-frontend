import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/components/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {

  activeItemIndex = 1;

  folders = [
    { path: './folder-1' },
    { path: './folder-2' },
    { path: './folder-3' },
    { path: './folder-4' },
  ]

  constructor() {
    super();
  }

  onInit(): void { }

  onDestroy(): void { }

  onClick(a: string): void {

  }

  onPlus(): void {

  }
}
