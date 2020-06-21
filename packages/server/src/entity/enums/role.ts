import { registerEnumType } from "type-graphql";

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}

registerEnumType(Role, {
  name: "Role",
  description: "The different user roles available."
})