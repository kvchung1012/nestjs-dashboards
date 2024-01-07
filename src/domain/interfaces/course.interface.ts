export interface Course extends Document {
  _id: string;
  name: string;
  score: number;
  enrollment: number;
  semester: string;
  major: string;
}
