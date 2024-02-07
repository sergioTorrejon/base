import * as dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
  ssl: false,
  SERVER_ENV:  process.env.NODE_ENV || '',
  SERVER_PORT: process.env.SERVER_PORT || '',
  JWT_SECRET: process.env.JWT_SECRET || '',
  PATH_ROOT: process.env.PATH_ROOT || '',
  IP_KONG : process.env.IP_KONG,
  SEGIP_URL : process.env.SEGIP_URL    
};
