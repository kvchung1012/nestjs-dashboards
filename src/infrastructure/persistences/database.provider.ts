import * as mongoose from 'mongoose';

export const DatabaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://0.0.0.0:27017/dashboard_student'),
  },
];
