import { CreatePostResolver } from "./createPost";
import { GetPostResolver } from "./getPosts";
import { DeletePostResolver } from "./deletePost";
import { UpdatePostResolver } from './updatePost';

const PostResolver = [
  CreatePostResolver,
  GetPostResolver,
  DeletePostResolver,
  UpdatePostResolver
]

export default PostResolver;