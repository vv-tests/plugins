import { Device } from '@capacitor/device';
import { Storage } from '@capacitor/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  async setInfo() {
    const info = await Device.getInfo();
    await Storage.set({
      key: 'info',
      value: JSON.stringify(info),
    });
  }

  async get(key: string) {
    const data = await Storage.get({ key });
    console.log(`data `, data);
  }

  async remove(key: string) {
    await Storage.remove({ key });
  }
}
