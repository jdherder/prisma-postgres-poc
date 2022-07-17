# TypeScript + Prisma + Postgres

## Getting Started

### Running Postgres
- Install docker
  - `brew install docker`
- Install docker-compose
  - `brew install docker-compose`
- Download / install / run Docker Desktop
	- Find it here: https://hub.docker.com/
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
  - Using `dev` will both create and apply the migration
  - You will have a new migration file like: `prisma/migrations/20220716041752_migration_name/migration.sql`

## Running Basic Examples

- Using prisma to read from DB
  - Run `npm run read` OR `npx ts-node examples/read.ts`
- Using prisma to write to DB
  - Run `npm run write` OR `npx ts-node examples/write.ts`

## Additional Notes

- Tutorial from Prisma I followed, great basic intro
  - https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres
- TYPES OUT OF THE BOX
- Really nice auto generated sql migrations based on changes to `schema.prisma`
- Baked in relational data connections
  - Example: `  author    User     @relation(fields: [authorId], references: [id])`
  - Can then be used on associated model (User) for quickly pull back the associated data
- Prisma Studio is kinda cool (`npx prisma studio`)
  - Spins up a quick web interface to view tables/data