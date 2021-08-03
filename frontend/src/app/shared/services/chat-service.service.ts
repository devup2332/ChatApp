import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PusherService } from './pusher.service';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceService {
  channel: string = '';
  constructor(private router: HttpClient, private _pusherSrv: PusherService) {
    this.channel = this._pusherSrv.channel?.name;
  }

  _getChats() {
    const access = localStorage.getItem('access');
    return this.router
      .get(`${environment.backend_uri}/api/get-chats`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .toPromise<any>();
  }

  //Get the chat's information
  _getChat(id: number) {
    const access = localStorage.getItem('access');
    return this.router
      .get(`${environment.backend_uri}/api/get-chat/${id}`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .toPromise<any>();
  }

  _sendMesage(message: { [key: string]: string }, id: string) {
    const access = localStorage.getItem('access');
    return this.router
      .post(
        `${environment.backend_uri}/api/new-message`,
        {
          message,
          id,
          channel: this._pusherSrv.channel?.name
        },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .toPromise<any>();
  }

  _filterUsers(message: { [key: string]: string }) {
    const search = message.search.split(/[ ,]+/);

    const access = localStorage.getItem('access');

    return this.router
      .post(
        `${environment.backend_uri}/api/search-user`,
        { search },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .toPromise<any>();
  }

  _createChat(id: string) {
    const access = localStorage.getItem('access');
    return this.router
      .post(
        `${environment.backend_uri}/api/create-chat`,
        { id, socket: this.channel },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .toPromise<any>();
  }
}
