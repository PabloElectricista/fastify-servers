function handler(request, reply) {
  reply.send("WELCOME MAN!!!")
}

const routes = [{
  url: "/",
  method: "GET",
  handler
}
]

export default routes