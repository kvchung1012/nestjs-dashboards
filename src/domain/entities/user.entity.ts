import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  user_name: String,
  password: String,
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
});
