import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FbLoginPageRoutingModule } from './fb-login-routing.module';

import { FbLoginPage } from './fb-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FbLoginPageRoutingModule
  ],
  declarations: [FbLoginPage]
})
export class FbLoginPageModule {}
