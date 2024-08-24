import prisma from "../../infraestructura/prisma/prismaConfig.js"

export async function findUsers() {
  return await prisma.user.findMany({
    include: { posts: true }
  })
}

export async function findUserById({ params }) {
  return await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })
}

export async function createNewUser({ body }) {
  return await prisma.user.create({
    data: body
  })
}

export async function updateUserById({ params, body }) {
  return await prisma.user.update({
    where: {
      id: params.id
    },
    data: body
  })
}

export async function deleteUserById({ params }) {
  return await prisma.user.delete({
    where: {
      id: params.id
    }
  })
}
