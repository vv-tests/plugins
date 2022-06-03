import { Component } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.page.html',
  styleUrls: ['./p1.page.scss'],
})
export class P1Page {
  async showToast() {
    console.log('you clicked toast');

    await Toast.show({
      text: 'Hello!',
    });
  }

  async showAction() {
    console.log('you clicked action sheet');

    const result = await ActionSheet.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload',
        },
        {
          title: 'Share',
        },
        {
          title: 'Remove',
          style: ActionSheetButtonStyle.Destructive,
        },
      ],
    });

    console.log('Action Sheet result:', result);
  }
}
