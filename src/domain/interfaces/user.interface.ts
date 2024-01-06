import { Document } from 'mongoose';

export interface User extends Document {
  readonly userName: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
}
