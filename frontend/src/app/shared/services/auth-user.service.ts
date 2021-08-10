import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  user: User;
  constructor(private http: HttpClient) {
    if (localStorage.getItem('access')) {
      (async () => {
        this.user = await this._getUserLogged();
      })();
    }
  }

  _login_user(credentials: any) {
    return this.http
      .post(`${environment.backend_uri}/api/auth/login`, credentials)
      .toPromise<any>();
  }

  _loginGoogleUser(data: any) {
    return this.http.post(
      `${environment.backend_uri}/api/auth/loginGoogle`,
      data
    );
  }

  _check_passwords(
    controlName: string,
    matchingControlName: string
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass1 = control.get(controlName)?.value;
      const pass2 = control.get(matchingControlName)?.value;

      return pass1 === pass2
        ? null
        : {
            notEqual: true,
          };
    };
  }

  _register_user(credentials: any) {
    return this.http
      .post(`${environment.backend_uri}/api/auth/register`, credentials)
      .toPromise();
  }

  _validate_email() {
    return (
      control: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      const email = control.value;
      return this.http
        .get(`${environment.backend_uri}/api/auth/validate-email/${email}`)
        .pipe(
          map((res: any) => {
            if (res.status) {
              return null;
            }

            return {
              exist: true,
            };
          })
        );
    };
  }

  _validate_email_profile() {
    return (
      control: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      const access = localStorage.getItem('access');
      const email = control.value;

      if (this.user?.email === email) {
        return EMPTY.pipe(map(() => null));
      }

      return this.http
        .post(
          `${environment.backend_uri}/api/validate-email-profile`,
          {
            email,
          },
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        )
        .pipe(
          map((res: any) => {
            if (res.status) {
              return null;
            }

            return {
              exist: true,
            };
          })
        );
    };
  }
  _refreshToken() {
    const refresh = localStorage.getItem('refresh');

    return this.http
      .post(`${environment.backend_uri}/api/refresh-token`, {
        refresh,
      })
      .toPromise<any>();
  }

  _getUserLogged() {
    const access = localStorage.getItem('access');

    return this.http
      .get(`${environment.backend_uri}/api/auth/get-user`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .toPromise<any>();
  }

  _logout_user() {
    const access = localStorage.getItem('access');
    return this.http
      .delete(`${environment.backend_uri}/api/logout`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .toPromise<any>();
  }

  _uploadPhoto(data: FormData) {
    const access = localStorage.getItem('access');

    return this.http.post(`${environment.backend_uri}/api/upload-photo`, data, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
  }

  _updateProfile(data: User) {
    const access = localStorage.getItem('access');
    return this.http.post(
      `${environment.backend_uri}/api/update-profile`,
      data,
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
  }
}
