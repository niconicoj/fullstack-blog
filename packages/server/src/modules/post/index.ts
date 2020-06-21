import { CreatePostResolver } from "./createPost";
import { GetPostResolver } from "./getPosts";
import { DeletePostResolver } from "./deletePost";

const PostResolver = [
  CreatePostResolver,
  GetPostResolver,
  DeletePostResolver
]

export default PostResolver;