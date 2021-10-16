import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-hbf-template',
  templateUrl: './hbf-template.component.html',
  styleUrls: ['./hbf-template.component.scss']
})
export class HbfTemplateComponent extends BaseComponent {

  constructor() {
    super();
  }

  onInit(): void { }

  onDestroy(): void { }

}
