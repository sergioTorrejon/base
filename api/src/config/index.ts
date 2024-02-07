export * from './app';
//export * from './db';

export const dbConfig = {
    ssl: false,
    type:  process.env.DATABASE_TYPE || '',
    host: process.env.DATABASE_HOST || '',
    username: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || '',
    port: +process.env.DATABASE_PORT || '',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'], 
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    logging: false,
    autoLoadEntities: true,
    //synchronize:true
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  
  };
  