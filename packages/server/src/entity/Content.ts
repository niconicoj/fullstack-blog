import { Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { Translation } from "./Translation";
import { ObjectType, Field } from "type-graphql";

@Entity()
@ObjectType()
export class Content extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field(() => [Translation])
  @OneToMany(() => Translation, translation => translation.content, {onDelete: "CASCADE", eager:true})
  translations: Translation[];
}