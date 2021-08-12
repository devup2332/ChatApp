import { Injectable } from '@angular/core';
import Pusher, { Channel } from 'pusher-js';
import { AuthUserService } from './auth-user.service';

@Injectable({
  providedIn: 'root',
})
export class PusherService {
  channel: Channel;
  pusher: Pusher;
  socket_id: string;

  constructor(private _authSrv: AuthUserService) {
      this.startService();
  }

  startService() {

    if (localStorage.getItem('access')) {
      (async () => {
        this.pusher = new Pusher('ac39880101ee89ff8d5a', {
          cluster: 'us2',
        });
        const user = await this._authSrv._getUserLogged();
        this.channel = this.pusher.subscribe(`${user.id}--channel`);
      })();
    }
  }
}
