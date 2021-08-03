import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthUserService } from '../services/auth-user.service';

@Pipe({
  name: 'photoUser',
})
export class PhotoUserPipe implements PipeTransform {
  constructor(private _authSrv: AuthUserService) {}
  transform(value: string): string {

    if (this._authSrv.user?.provider === 'google') {
      const avatar = value.replace('/images/', '');

      return avatar.replace('%3A', ':/');
    }
    return value;
  }
}
