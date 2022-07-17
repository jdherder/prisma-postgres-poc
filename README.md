# TypeScript + Prisma + Postgres

## Getting Started

### Running Postgres
- Install docker
  - `brew install docker`
- Install docker-compose
  - `brew install docker-compose`
- Download / install / run [Docker Desktop](https://hub.docker.com/)
  - Install and start the app
  - Alternatively, you could run docker from the command line
- There is a super simple example docker compose file in this repo for demo purposes that includes a Postgres image
- Spin up containers with Postgres image
  - `docker-compose up -d`

### Running TS/Prisma

- Install deps
  - `npm install`
- Apply existing migrations
  - `npx prisma migrate deploy`

After making any changes to `prisma/schema.prisma`
- Run `npx prisma migrate dev --name migration_name`
  - This will create a sql migration based on your changes to the schema
  - Using "dev" will both create and apply the migration
  - You will have a new migration file like: `prisma/migrations/20220716041752_migration_name/migration.sql`
- Run `npx prisma generate`
  - Whenever you make changes to your database that are reflected in the Prisma schema, you need to manually re-generate Prisma Client to update the generated code in the node_modules/.prisma/client directory.

## Running Basic Examples

- Using prisma to read from DB
  - Run `npm run read` OR `npx ts-node examples/read.ts`
- Using prisma to write to DB
  - Run `npm run write` OR `npx ts-node examples/write.ts`

## Additional Notes

- [Tutorial from Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres) I followed, great basic intro
- TYPES OUT OF THE BOX
- Really nice auto generated sql migrations based on changes to `schema.prisma`
- Baked in relational data connections
  - Example: `  author    User     @relation(fields: [authorId], references: [id])`
  - Can then be used on associated model (User) for quickly pull back the associated data
- Prisma Studio is kinda cool (`npx prisma studio`)
  - Spins up a quick web interface to view tables/data
- Popularity: Prisma has [490k downloads per week on NPM](https://www.npmjs.com/package/prisma) / [24k stars on Github](https://github.com/prisma/prisma)

### Alternative JS/TS ORMs
- [TypeORM](https://typeorm.io/)
  - Popularity: [1m downloads per week on NPM](https://www.npmjs.com/package/typeorm) / [28.8k stars on Github](https://github.com/typeorm/typeorm)
  - Migrations: https://github.com/typeorm/typeorm/blob/master/docs/migrations.md
- [Sequelize](https://sequelize.org/)
  - Popularity: [1.2m downloads per week on NPM](https://www.npmjs.com/package/sequelize) / [26.5k stars on Github](https://github.com/sequelize/sequelize)
  - Does not yet have full TS support without additional packages