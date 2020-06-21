import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Content } from "./Content";

@Entity()
@ObjectType()
export class Mail extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique: true})
  @Index()
  label: string;

  @Field()
  @OneToOne(() => Content, {onDelete: 'CASCADE'})
  @JoinColumn()
  template: Content;

  @Field()
  @OneToOne(() => Content, {onDelete: 'CASCADE'})
  @JoinColumn()
  subject: Content;
}