import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FbLoginPage } from './fb-login.page';

const routes: Routes = [
  {
    path: '',
    component: FbLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FbLoginPageRoutingModule {}
