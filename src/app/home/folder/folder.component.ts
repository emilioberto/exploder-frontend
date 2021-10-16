import { Component } from '@angular/core';
import { of } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent extends BaseComponent {

  data = [
    { name: 'fango.pdf' },
    { name: 'fango1.pdf' },
    { name: 'fango2.pdf' },
    { name: 'fango3.pdf' },
    { name: 'fango4.pdf' },
    { name: 'fango5.pdf' },
    { name: 'fango6.pdf' },
    { name: 'fango7.pdf' },
  ];

  columns = ['name'];

  constructor() {
    super();
  }

  onInit(): void { }
  onDestroy(): void { }
}
