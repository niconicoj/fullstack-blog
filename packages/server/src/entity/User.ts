import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";
import { Role } from "./enums/role";

@Entity()
@ObjectType()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  nameFirst: string;

  @Column()
  nameLast: string;

  @Field()
  name(): string {
    return `${this.nameFirst} ${this.nameLast}`
  }

  @Column("text", {unique:true})
  @Field()
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: Role,
    default: Role.USER})
  @Field(() => Role)
  role: Role;

  @Column({default: false})
  @Field()
  optin: boolean;

  @Column({default: false})
  @Field()
  emailConfirmed: boolean;
}
