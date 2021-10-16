import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HbfTemplateComponent } from './components/hbf-template/hbf-template.component';




@NgModule({
  declarations: [
    HbfTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HbfTemplateComponent
  ]
})
export class SharedModule { }
