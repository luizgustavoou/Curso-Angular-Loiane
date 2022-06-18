import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';




@NgModule({
  declarations: [
    AlertModalComponent,
    ErrorMsgComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AlertModalComponent, ErrorMsgComponent],
  entryComponents: [AlertModalComponent, ConfirmModalComponent]
})
export class SharedModule { }
