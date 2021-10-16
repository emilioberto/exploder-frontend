import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HbfTemplateComponent } from './components/hbf-template/hbf-template.component';
import { TuiLetModule } from '@taiga-ui/cdk';




@NgModule({
  declarations: [
    HbfTemplateComponent
  ],
  imports: [
    CommonModule,
    TuiLetModule,
  ],
  exports: [
    CommonModule,
    HbfTemplateComponent,
    TuiLetModule
  ]
})
export class SharedModule { }
