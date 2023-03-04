import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './component/index/index.component';
import { AcceptComponent } from './component/accept/accept.component';

const routes: Routes = [
   {path:'' , redirectTo:'index' ,pathMatch:'full' },
  {path:'index', component:IndexComponent},
  { path: 'accept', component: AcceptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
