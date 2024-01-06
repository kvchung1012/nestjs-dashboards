import * as mongoose from 'mongoose';

export const ClassSchema = new mongoose.Schema({
  name: String,
  majorId: mongoose.Schema.ObjectId,
  version: String,
  englishLevel: String,
  batch: Number,
  englishLevelNumber: Number,
});
