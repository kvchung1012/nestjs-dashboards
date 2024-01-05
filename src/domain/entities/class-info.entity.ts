import * as mongoose from 'mongoose';

export const ClassInfoSchema = new mongoose.Schema({
  class_id: mongoose.Schema.ObjectId,
  english_level: String,
  batch: String,
  major_id: mongoose.Schema.ObjectId,
});
