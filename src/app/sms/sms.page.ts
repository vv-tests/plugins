import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { AlertController } from '@ionic/angular';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private sms: SMS,
    private alertController: AlertController,
    private androidPermissions: AndroidPermissions
  ) {}

  ionicForm = this._fb.group({
    mobile: ['6282906569', [Validators.required]],
    message: ['Hello', [Validators.required]],
  });
  submitForm() {
    console.log(this.ionicForm.value);

    if (this.ionicForm.invalid) {
      return;
    }
    this.send(this.ionicForm.value.number, this.ionicForm.value.message);
  }
  send(number, message) {
    this.checkSMSPermission();

    // CONFIGURATION
    const options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: '', // send SMS with the native android SMS messaging
        // intent: '' // send SMS without opening any other app
      },
    };
    this.sms
      .send(number, message, options)
      .then(() => {
        this.presentAlert('Success', 'message has been sent');
      })
      .catch((error) => {
        console.log(error);
        this.presentAlert('Error', 'Failed: ' + error);
      });
  }
  checkSMSPermission() {
    this.androidPermissions
      .checkPermission(this.androidPermissions.PERMISSION.SEND_SMS)
      .then(
        (result) => console.log('Has permission?', result.hasPermission),
        (err) =>
          this.androidPermissions.requestPermission(
            this.androidPermissions.PERMISSION.SEND_SMS
          )
      );
  }
  requestSMSPermission() {
    // tslint:disable-next-line: max-line-length
    this.androidPermissions.requestPermissions([
      this.androidPermissions.PERMISSION.SEND_SMS,
      this.androidPermissions.PERMISSION.BROADCAST_SMS,
    ]);
  }

  // Send a text message using default options

  ngOnInit() {}
  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header,
      subHeader: 'Subtitle',
      message,
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
