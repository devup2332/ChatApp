import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { AuthUserService } from 'src/app/shared/services/auth-user.service';
import { ChatServiceService } from 'src/app/shared/services/chat-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-new-chat',
  templateUrl: './modal-new-chat.component.html',
  styleUrls: ['./modal-new-chat.component.scss'],
})
export class ModalNewChatComponent implements OnInit {
  newChatForm: FormGroup;

  @Input() modalActive: undefined | boolean = false;
  @ViewChild(SnackbarComponent) snackbar: SnackbarComponent;
  users: any[];
  timer: any;
  user: any;
  backend_uri: string = environment.backend_uri;
  constructor(
    private chatSrv: ChatServiceService,
    private authSrv: AuthUserService
  ) {}

  async ngOnInit() {
    this.newChatForm = new FormGroup({
      search: new FormControl('', [Validators.required]),
    });

    this.user = await this.authSrv._getUserLogged();
  }

  closeModal(e: Event) {
    const modal = document.querySelector<HTMLDivElement>(
      '.new-chat-modal-container'
    );
    if (e.target === modal) {
      //Reset all users filter and the input
      this.users = [];
      this.modalActive = false;
      this.newChatForm.get('search')?.reset();
      return;
    }
  }

  async serchingUser() {
    //Get users
    const res = await this.chatSrv._filterUsers(this.newChatForm.value);
    this.users = res.slice(0, 5);
    //Just give to user the first 5 coincidences
    const index = this.users.findIndex((user) => {
      return user.id === this.user?.id;
    });

    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  async createChat(user?: any) {
    //Closing modal when a chat is created
    this.modalActive = false;
    this.newChatForm.get('search')?.reset();

    //Create chat if the user use the mouse to select a user
    if (user) {
      await this.chatSrv._createChat(user?.id);
      return (this.users = []);
    }

    //Create a chat if just push ENTER to create the first coincidence
    await this.chatSrv._createChat(this.users[0].id);
    return (this.users = []);
  }
}
