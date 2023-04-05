import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListreportComponent } from './main/listreport/listreport.component';
import { ObjectpageComponent } from './main/objectpage/objectpage.component';

const routes: Routes = [
  { path: "", component: ListreportComponent },
  { path: "podetail/:id", component: ObjectpageComponent },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
