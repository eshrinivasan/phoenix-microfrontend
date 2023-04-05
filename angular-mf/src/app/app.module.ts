import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from "./main/main.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemingService, ThemingModule } from '@fundamental-ngx/core/theming';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { RouterModule } from '@angular/router';
// import { ShellbarBasicExampleComponent } from './common/shellbar/shellbar-basic-example.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FundamentalNgxCdkModule } from '@fundamental-ngx/cdk';
import {  FdDatetimeModule } from '@fundamental-ngx/core';
import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    FundamentalNgxCdkModule,
    FundamentalNgxCoreModule, FdDatetimeModule,
    FundamentalNgxPlatformModule,
    HttpClientModule,
    CdkTableModule,
    DragDropModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot([]),
    ThemingModule.withConfig({ defaultTheme: 'sap_fiori_3' }),
  ],
  providers: [],
  bootstrap: [AppComponent] //, ShellbarBasicExampleComponent
})
export class AppModule {
  constructor(themingService: ThemingService) {
    themingService.init();
  }
}
