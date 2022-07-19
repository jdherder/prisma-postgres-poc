import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const fundInput: Prisma.FundCreateInput = {
    name: 'Example',
    type: 'generic',
    allowAdditionalCapital: true,
  }

  const createdFund = await prisma.fund.create({ data: fundInput })
  console.dir(createdFund, { depth: null })
  
  // Example for pulling in the auto generated from schema `UserCreateInput` type.
  const userInput: Prisma.UserCreateInput = {
    email: 'josh@example.com',
    firstName: 'Josh',
    familyName: 'Herder',
  }

  const createdUser = await prisma.user.create({ data: userInput })
  console.dir(createdUser, { depth: null })

  const userFundInput: Prisma.UserFundCreateInput = {
    user: { connect: { id: createdUser.id } },
    fund: { connect: { id: createdFund.id } },
    balance: 0,
    lifetimeProfitOrLoss: 0,
  }

  const createdUserFund = await prisma.userFund.create({ data: userFundInput })
  console.dir(createdUserFund, { depth: null })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
