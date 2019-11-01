import fastify from "fastify";
import {Server, IncomingMessage, ServerResponse} from 'http';

const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();

const start = async () => {
  try {
    await server.listen(3000)
    console.log(`server listening on 3000`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()