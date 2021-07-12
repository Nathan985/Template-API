import { ConnectionOptions } from 'typeorm';

export default {
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USER,
  password: process.env.TYPEORM_PASS,
  database: process.env.TYPEORM_DBA,
  entities: [
    "src/entities/*.ts"
  ],
  migrations: [
    "src/database/migrations/*.ts"
  ],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/database/migrations",
  }
} as ConnectionOptions