import { RegisterResolver } from "./register";
import { MeResolver } from "./me";
import { LoginResolver } from "./login";
import { confirmResolver } from "./confirm";
import { ForgotPasswordResolver } from "./forgotPassword";
import { ChangePasswordResolver } from "./changePassword";
import { LogoutResolver } from "./logout";

const UserResolver = [
  RegisterResolver,
  MeResolver,
  LoginResolver,
  MeResolver,
  confirmResolver,
  ForgotPasswordResolver,
  ChangePasswordResolver,
  LogoutResolver
]

export default UserResolver;