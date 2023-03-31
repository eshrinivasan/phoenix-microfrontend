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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    ThemingModule.withConfig({ defaultTheme: 'sap_fiori_3' }),
    FundamentalNgxCoreModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent] //, ShellbarBasicExampleComponent
})
export class AppModule { 
constructor(themingService: ThemingService) {
themingService.init();
}
}
