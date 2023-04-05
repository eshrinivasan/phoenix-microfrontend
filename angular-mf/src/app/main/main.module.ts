import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListreportComponent } from './listreport/listreport.component';
import { ObjectpageComponent } from './objectpage/objectpage.component';
//import { ShellbarBasicExampleComponent } from './common/shellbar/shellbar-basic-example.component';
import {RouterModule} from '@angular/router';
import { FormModule } from '@fundamental-ngx/core/form';
import { DynamicPageModule } from '@fundamental-ngx/core/dynamic-page';
import { FacetModule } from '@fundamental-ngx/core/facets';

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
    RouterModule,
    FormModule,
    DynamicPageModule,
    FacetModule
  ]
})
export class MainModule { }
