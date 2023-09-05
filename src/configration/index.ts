import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  dataBaseURL: process.env.DATBASE_URL,
}));
