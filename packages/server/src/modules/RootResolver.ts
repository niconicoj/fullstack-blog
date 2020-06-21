import UserResolver from "./user";
import LocaleResolver from "./locale";
import PostResolver from "./post";
import contentResolver from "./content";

const RootResolver = [
  ...UserResolver,
  ...LocaleResolver,
  ...PostResolver,
  ...contentResolver
];

export default RootResolver;