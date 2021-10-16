import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TuiTabsModule } from '@taiga-ui/kit';
import { FolderModule } from './folder/folder.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    FolderModule,
    TuiTabsModule
  ]
})
export class HomeModule { }
