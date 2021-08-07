import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { AuthUserService } from 'src/app/shared/services/auth-user.service';
import { PusherService } from 'src/app/shared/services/pusher.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-user-information',
  templateUrl: './modal-user-information.component.html',
  styleUrls: ['./modal-user-information.component.scss'],
})
export class ModalUserInformationComponent implements OnInit {
  userForm: FormGroup;
  user: any;
  timer: any;
  backend_uri: string = environment.backend_uri;
  @ViewChild('modalContainer') modalContainer: ElementRef;
  @ViewChild(SnackbarComponent) snackbar: SnackbarComponent;

  constructor(
    private authSrv: AuthUserService,
    private _pusherSrv: PusherService,
    private _authSrv: AuthUserService
  ) {}

  ngOnInit(): void {
    this.createForm();

    this._pusherSrv.channel?.bind('photo-updated-user', async (data: any) => {
      this.user = await this._authSrv._getUserLogged();
      if (this.timer) clearTimeout(this.timer);
      const message: string = data.message;
      this.snackbar.show(message);
      this.timer = setTimeout(() => {
        this.snackbar.close();
      }, 3000);
    });
  }

  createForm() {
    this.userForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        [Validators.required, Validators.pattern(environment.emailPatt)],
        this.authSrv._validate_email_profile()
      ),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(environment.numberPatt),
      ]),
    });
  }

  updateUser(userData: any) {
    if (this.userForm.invalid)
      return Object.values(this.userForm.controls).forEach((control) => {
        control.markAsDirty();
      });
    this._authSrv._updateProfile(userData).subscribe(() => {
      this.snackbar.show('User was updated');
    });
  }

  showModal(user: any) {
    this.user = user;
    this.userForm.patchValue(
      {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        phone: this.user.phone,
      },
      {
        emitEvent: false,
      }
    );
    this.modalContainer.nativeElement.classList.add('visible');
  }

  evalCloseModal(e: Event) {
    const modal = document.querySelector('.modal-user-information-container');
    if (e.target === modal) {
      modal?.classList.remove('visible');
    }
  }

  async updateImage(e: any) {
    if (!e.target?.files[0]) return;
    const data = new FormData();
    data.append('image', e.target?.files[0]);
    data.append('id', this.user?.avatar?.id);

    this.snackbar.show('Uploading');
    this.authSrv._uploadPhoto(data).subscribe((e) => {
      this.snackbar.close();
    });
  }

  get validateEmail() {
    return (
      this.userForm.get('email')?.hasError('exist') &&
      (this.userForm.get('email')?.touched || this.userForm.get('email')?.dirty)
    );
  }
}
