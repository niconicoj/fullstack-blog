import { Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity, Column, Index } from "typeorm";
import { Translation } from "./Translation";
import { ObjectType, Field } from "type-graphql";

@Entity()
@ObjectType()
export class Content extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({nullable: true})
  @Field({nullable: true})
  @Index()
  label: string;

  @Field(() => [Translation])
  @OneToMany(() => Translation, translation => translation.content, {onDelete: "CASCADE", eager:true})
  translations: Promise<Translation[]>;
}