import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn, BaseEntity } from "typeorm";
import { Content } from "./Content";
import { Locale } from "./Locale";
import { ObjectType, Field } from "type-graphql";

@Entity()
@ObjectType()
export class Translation extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Content, content => content.translations)
  @JoinColumn({name: 'contentId'})
  content: Content;

  @Column('uuid')
  contentId: string;

  @ManyToOne(() => Locale, locale => locale.label)
  @JoinColumn({name: 'locale', referencedColumnName: 'label'})
  localeConnection: Locale;

  @Column()
  @Field()
  locale: string;

  @Column('text')
  @Field()
  text: string;
} 