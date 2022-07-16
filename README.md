# TypeScript + Prisma + Postgres

## Getting Started

### Running Postgres
- Install docker (`brew install docker`)
- Install docker-compose (`brew install docker-compose`)
- Download / install / run docker desktop
	- https://hub.docker.com/
  - Alternatively, you could run docker from the command line
- There is a super simple example docker compose file in this repo for demo purposes that includes a Postgres image
- Run docker: `docker-compose up -d`

### Running TS/Prisma
- `npm install`


## Running Basic Examples

### Reads

Run `npm run read` OR `npx ts-node examples/read.ts`

### Writes

Run `npm run write` OR `npx ts-node examples/write.ts`

## Notes

- Tutorial from Prisma I followed, great basic intro
  - https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres
- TYPES OUT OF THE BOX
- Really nice auto generated sql migrations based on changes to `schema.prisma`
- Baked in relational data connections
  - Example: `  author    User     @relation(fields: [authorId], references: [id])`
  - Can then be used on associated model (User) for quickly pull back the associated data
- Prisma Studio is kinda cool (`npx prisma studio`)
  - Spins up a quick web interface to view tables/data