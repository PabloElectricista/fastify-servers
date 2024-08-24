import { 
  findPosts, 
  findPostById, 
  createNewPost, 
  updatePostById,
  deletePostById 
} from '../handlers/post.handlers.js'

const routes = [
  {
    url: "/post",
    method: "GET",
    handler: findPosts,
  },
  {
    url: "/post/:id",
    method: "GET",
    handler: findPostById,
  },
  {
    url: "/post",
    method: "POST",
    handler: createNewPost,
  },
  {
    url: "/post/:id",
    method: "PATCH",
    handler: updatePostById,
  },
  {
    url: "/post/:id",
    method: "DELETE",
    handler: deletePostById,
  },
];

export default routes;