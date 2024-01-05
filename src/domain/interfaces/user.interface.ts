import { Document } from 'mongoose';

export interface User extends Document {
  readonly user_name: string;
  readonly password: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone: string;
}
