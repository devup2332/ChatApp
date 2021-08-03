import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import { User } from './user.model';

export interface Chat {
  id: string;
  last_message: string;
  messages: Message[];
  user_1: User;
  user_2: User;
}

