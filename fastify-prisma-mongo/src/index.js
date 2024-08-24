// Import the framework and instantiate it
import {config} from 'dotenv'
config()

import prisma from './infraestructura/prisma/prismaConfig.js'

import { fastifyMongodb } from '@fastify/mongodb'
import Fastify from 'fastify'
const fastify = Fastify({
  logger: false
})

import registerRoutes from './adapters/routes/index.js'
import wellcome from './adapters/routes/wellcome.routes.js'
import userRoutes from './adapters/routes/user.routes.js'
import postRoutes from './adapters/routes/post.routes.js'

fastify.register(fastifyMongodb, {
  forceClose: true,
  url: process.env.DATABASE_URL
})

registerRoutes(fastify, wellcome)
registerRoutes(fastify, userRoutes)
registerRoutes(fastify, postRoutes)

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  await prisma.$disconnect()
  process.exit(1)
}
