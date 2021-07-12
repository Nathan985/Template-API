import variables from 'dotenv';

variables.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});