import { ObjectType, Field, Ctx } from "type-graphql";
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn } from "typeorm";
import { Content } from "./Content";
import { AppContext } from "src/types/AppContext";

@Entity()
@ObjectType()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({default:() => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @Column('uuid')
  bodyId: string;

  @OneToOne(() => Content, {onDelete: 'CASCADE'})
  @JoinColumn({name: "bodyId"})
  body: Promise<Content>;

  @Field(() => Content, {name: "body"})
  bodyLoader(@Ctx() { contentLoader }: AppContext): Promise<Content> {
    return contentLoader.load(this.bodyId);
  }

  @Column("uuid")
  titleId: string;

  @OneToOne(() => Content, {onDelete: 'CASCADE'})
  @JoinColumn({name: "titleId"})
  title: Promise<Content>;
  
  @Field(() => Content, {name: "title"})
  titleLoader(@Ctx() { contentLoader }: AppContext): Promise<Content> {
    return contentLoader.load(this.titleId);
  }
}