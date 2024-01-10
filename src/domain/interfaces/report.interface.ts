export interface Report extends Document {
  _id: string;
  name: string;
  score: number;
  enrollment: number;
  semester: string;
  major: string;
}
