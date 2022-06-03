import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  ionViewDidEnter() {
    setTimeout(() => {
      this.setStatusBarStyleLight();
    }, 2000);
    setTimeout(() => {
      this.hideStatusBar();
    }, 4000);
    setTimeout(() => {
      this.showStatusBar();
    }, 6000);
    setTimeout(() => {
      this.setStatusBarStyleDark();
    }, 8000);
  }
  async setStatusBarStyleDark() {
    await StatusBar.setStyle({ style: Style.Dark });
  }

  async setStatusBarStyleLight() {
    await StatusBar.setStyle({ style: Style.Light });
  }

  async hideStatusBar() {
    await StatusBar.hide();
  }

  async showStatusBar() {
    await StatusBar.show();
  }
}
