import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  // Example for pulling in the auto generated from schema `UserCreateInput` type.
  const input: Prisma.UserCreateInput = {
    email: 'josh@test.com',
    name: 'Josh',
    posts: {
      create: { title: 'Hello World' },
    },
    profile: {
      create: { bio: 'I like turtles' },
    },
  }

  await prisma.user.create({ data: input })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
