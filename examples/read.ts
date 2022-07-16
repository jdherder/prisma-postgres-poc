import { PrismaClient, Prisma } from '@prisma/client'

// Example for pulling in the `User` model auto generated types. Hover User here to see the generated types.
type User = Prisma.UserSelect

const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
