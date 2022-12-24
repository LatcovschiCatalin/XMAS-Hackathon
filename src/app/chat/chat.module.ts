import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { UsersComponent } from './shared/users/users.component';
import { MessageComponent } from './shared/message/message.component';


@NgModule({
  declarations: [
    ChatComponent,
    UsersComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
