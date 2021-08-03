import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from 'src/app/shared/models/user.model';
import { ChatServiceService } from 'src/app/shared/services/chat-service.service';
import { PusherService } from 'src/app/shared/services/pusher.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-yes-chat',
  templateUrl: './yes-chat.component.html',
  styleUrls: ['./yes-chat.component.scss'],
})
export class YesChatComponent implements OnInit, OnDestroy {
  messageForm: FormGroup;
  user: User;
  backend_uri: string = environment.backend_uri;
  @Input('chat') chat: any;
  @Output() newMessage = new EventEmitter<string>();
  @ViewChild('bubbles', { static: false }) bubbles: ElementRef<HTMLDivElement>;

  constructor(
    private _chatSrv: ChatServiceService,
    private _pusherSrv: PusherService
  ) {}

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      message: new FormControl('', Validators.required),
    });

    //Pusher handlers
    this._pusherSrv.channel?.bind('login-user', async () => {
      if (this.chat) {
        this.chat = await this._chatSrv._getChat(this.chat.id);
      }
    });

    this._pusherSrv.channel?.bind('logout-user', async () => {
      if (this.chat) {
        this.chat = await this._chatSrv._getChat(this.chat.id);
      }
    });

    this._pusherSrv.channel?.bind('new-message-user', async (data: any) => {
      this.chat?.messages.push(data?.message);
      //Waiting 100 milisecond to set scroll into bubbles conttainer
      setTimeout(() => {
        this.bubbles.nativeElement.scroll({
          top: this.bubbles.nativeElement.children[0]?.clientHeight,
          left: 0,
          behavior: 'smooth',
        });
      }, 100);

      this.newMessage.emit(data?.message?.message);
    });
  }

  ngOnDestroy() {
    this._pusherSrv.channel?.unbind_all();
  }

  async setChat(id: number, user: any) {

    this.chat = await this._chatSrv._getChat(id);
    this.user = user;
    this.bubbles.nativeElement.scrollTo({
      top: this.bubbles.nativeElement.children[0]?.clientHeight,
      left: 0,
    });
  }

  async sendMessage(message: any) {
    if (this.messageForm.invalid) {
      return;
    }
    await this._chatSrv._sendMesage(message, this.chat?.id);
    const h = this.bubbles.nativeElement.scrollHeight;
    this.bubbles.nativeElement.scrollTo({
      top: h,
      left: 0,
      behavior: 'smooth',
    });
    this.messageForm.reset();
  }
}
