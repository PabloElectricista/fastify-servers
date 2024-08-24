import { 
  findUsers, 
  findUserById, 
  createNewUser, 
  updateUserById,
  deleteUserById 
} from '../handlers/user.handlers.js'

const routes = [
  {
    url: "/user",
    method: "GET",
    handler: findUsers,
  },
  {
    url: "/user/:id",
    method: "GET",
    handler: findUserById,
  },
  {
    url: "/user",
    method: "POST",
    handler: createNewUser,
  },
  {
    url: "/user/:id",
    method: "PATCH",
    handler: updateUserById,
  },
  {
    url: "/user/:id",
    method: "DELETE",
    handler: deleteUserById,
  },
];

export default routes;