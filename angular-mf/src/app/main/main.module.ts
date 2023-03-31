import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListreportComponent } from './listreport/listreport.component';
import { ObjectpageComponent } from './objectpage/objectpage.component';
//import { ShellbarBasicExampleComponent } from './common/shellbar/shellbar-basic-example.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ListreportComponent,
    ObjectpageComponent,
    //ShellbarBasicExampleComponent
  ],
  exports:[
    //ShellbarBasicExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainModule { }
