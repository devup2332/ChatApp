import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from '../shared/services/auth-user.service';
import { ChatServiceService } from '../shared/services/chat-service.service';
import { PusherService } from '../shared/services/pusher.service';
import { ModalNewChatComponent } from './components/modal-new-chat/modal-new-chat.component';
import { ModalUserInformationComponent } from './components/modal-user-information/modal-user-information.component';
import { YesChatComponent } from './components/yes-chat/yes-chat.component';
import { environment } from '../../environments/environment';
import { User } from '../shared/models/user.model';
import { Chat } from '../shared/models/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild(YesChatComponent) private yesChatView: YesChatComponent | null;
  @ViewChild(ModalNewChatComponent) private modalChat: ModalNewChatComponent;
  @ViewChild(ModalUserInformationComponent)
  private modalUpdateUser: ModalUserInformationComponent;

  loading: boolean = true;
  theme: string | null;
  user: User;
  chats: Chat[];
  chat: Chat;
  backend_uri: string = environment.backend_uri;

  //Chat selected to display is right container
  chat_selected: Chat;
  modalVisible: undefined | boolean = false;

  //Validate what device is using
  devices: RegExp[] = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  match: boolean = false;
  constructor(
    private router: Router,
    private _authSrv: AuthUserService,
    private _chatSrv: ChatServiceService,
    private _pusherSrv: PusherService
  ) {}

  async ngOnInit(): Promise<void> {
    //Start loading
    this.loading = true;

    await this.getUserLogged();

    //Setting a theme if theme variables dosent exist
    this.charginTheme();

    this.match = this.devices.some((device) => {
      return navigator.userAgent.match(device);
    });

    //Get data of user's chats

    this.chats = await this._chatSrv._getChats();

    this.loading = false;

    //Handlers for pusher
    this._pusherSrv.channel?.bind(
      'new-chat',
      async (data: { [chat: string]: Chat }) => {
        if (
          this.user.id === data.chat.user_1.id ||
          this.user.id === data.chat.user_2.id
        ) {
          console.log('Agregado');
          this.chats.push(data.chat);
        }
      }
    );

    this._pusherSrv.channel.bind('photo-updated-user', async () => {
      await this.getUserLogged();
    });
  }

  //Showing Modal for edit user Information
  showModal() {
    this.modalUpdateUser.showModal(this.user);
  }

  charginTheme() {
    this.theme = localStorage.getItem('theme');
    if (!this.theme) {
      this.theme = 'light-theme';
      localStorage.setItem('theme', 'light-theme');
    }
    if (this.theme === 'light-theme') {
      document.body.classList.add('light-theme');
    }

    if (this.theme === 'dark-theme') {
      document.body.classList.add('dark-theme');
    }
  }

  //Handler for switch theme

  switchTheme(toggle: HTMLDivElement) {
    toggle.classList.toggle('active');
    this.theme = localStorage.getItem('theme');
    if (this.theme === 'light-theme') {
      document.body.classList.remove(this.theme);
      this.theme = 'dark-theme';
      localStorage.setItem('theme', this.theme);
      document.body.classList.add(this.theme);
      return;
    }
    if (this.theme === 'dark-theme') {
      document.body.classList.remove(this.theme);
      this.theme = 'light-theme';
      localStorage.setItem('theme', this.theme);

      document.body.classList.add(this.theme);
    }
  }

  async logout() {
    this.loading = true;
    await this._authSrv._logout_user();
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    this.loading = false;
    this.router.navigate(['/login']);
    if (this.theme === 'dark-theme') {
      document.body.classList.remove('dark-theme');

      localStorage.setItem('theme', 'light-theme');
      document.body.classList.add('light-theme');
    }
  }

  async setChat(chat?: any) {
    this.chat_selected = chat;
    this.yesChatView?.setChat(chat.id, this.user);
  }

  async newMessage() {
    this.chats = await this._chatSrv._getChats();
  }

  async getUserLogged() {
    try {
      const user = await this._authSrv._getUserLogged();
      this.user = user;
    } catch (err) {
      if (err.status === 401) {
        const token = await this._authSrv._refreshToken();
        localStorage.setItem('access', token.access);
        this.user = await this._authSrv._getUserLogged();
      }
    }
  }

  openModal() {
    this.modalChat.modalActive = true;
  }

  get darkActive() {
    return this.theme === 'dark-theme';
  }
}
