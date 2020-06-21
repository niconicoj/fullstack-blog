import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, BaseEntity } from "typeorm";
import { Translation } from "./Translation";
import { ObjectType, Field } from "type-graphql";

@Entity()
@ObjectType()
export class Locale extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Translation, translation => translation.locale)
  translations: Translation[];

  @Field()
  @Column({unique: true})
  @Index()
  label: string;

  @Field()
  @Column()
  name: string;
}