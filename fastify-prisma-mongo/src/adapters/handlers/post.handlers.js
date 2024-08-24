import prisma from "../../infraestructura/prisma/prismaConfig.js"

export async function findPosts() {
  return await prisma.post.findMany({
    include: { author: true }
  })
}

export async function findPostById({ params }) {
  return await prisma.post.findUnique({
    where: {
      id: params.id
    }
  })
}

export async function createNewPost({ body }) {
  return await prisma.post.create({
    data: body
  })
}

export async function updatePostById({ params, body }) {
  return await prisma.post.update({
    where: {
      id: params.id
    },
    data: body
  })
}

export async function deletePostById({ params }) {
  return await prisma.post.delete({
    where: {
      id: params.id
    }
  })
}
