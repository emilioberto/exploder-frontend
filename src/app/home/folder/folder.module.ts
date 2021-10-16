import { NgModule } from '@angular/core';
import { FolderComponent } from './folder.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TuiLoaderModule } from '@taiga-ui/core';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';



@NgModule({
  declarations: [
    FolderComponent
  ],
  imports: [
    SharedModule,
    TuiLoaderModule,
    TuiTableModule,
  ],
  exports: [
    FolderComponent
  ]
})
export class FolderModule { }
