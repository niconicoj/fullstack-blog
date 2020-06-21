And this is the body of my first post. I intend this blog to be a place where I can write about what I learn on my journey to become an 'okay' developer.

probably the first thing I am going to talk about here is what I learned will building this blog project. And I'll start right now by stating what my vision was in greater detail.

I wanted to make a plateform for me to post stuff I learn about. And I wasn't satisfied with having an ensemble of pre made files that could be render through some process. I wanted to make something that was more unified and would not require me to "code" a new page every time I wanted to post something.

I also wanted people to be able to respond directly to my post and engage in discussion whether it be with me or between themselves. So basically a comment system. That and the "me posting stuff" part really implied that I needed some dedicated "user fonctionality". here's some code :

```
@Entity()
@ObjectType()
export class Content extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field(() => [Translation])
  @OneToMany(() => Translation, translation => translation.content, {onDelete: "CASCADE"})
  translations: Promise<Translation[]>;
}
```

And this is the body of my first post. I intend this blog to be a place where I can write about what I learn on my journey to become an 'okay' developer.

probably the first thing I am going to talk about here is what I learned will building this blog project. And I'll start right now by stating what my vision was in greater detail.

I wanted to make a plateform for me to post stuff I learn about. And I wasn't satisfied with having an ensemble of pre made files that could be render through some process. I wanted to make something that was more unified and would not require me to "code" a new page every time I wanted to post something.

I also wanted people to be able to also respond directly to my post and engage in discussion whether it be with me or between themselves. So basically a comment system. That and the "me posting stuff" part really implied that I needed some dedicated "user fonctionality".