import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts?: Maybe<PostsOutput>;
  content?: Maybe<Content>;
};


export type QueryPostArgs = {
  postId: Scalars['String'];
};


export type QueryPostsArgs = {
  page?: Maybe<Scalars['Float']>;
};


export type QueryContentArgs = {
  label: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  role: Role;
  optin: Scalars['Boolean'];
  emailConfirmed: Scalars['Boolean'];
};

/** The different user roles available. */
export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  body: Content;
  title: Content;
};


export type Content = {
  __typename?: 'Content';
  id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  translations: Array<Translation>;
  text?: Maybe<Scalars['String']>;
};

export type Translation = {
  __typename?: 'Translation';
  locale: Scalars['String'];
  text: Scalars['String'];
};

export type PostsOutput = {
  __typename?: 'PostsOutput';
  pageCount: Scalars['Float'];
  posts?: Maybe<Array<Post>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  login?: Maybe<User>;
  confirmMail: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword?: Maybe<User>;
  logout: Scalars['Boolean'];
  setLocale: Scalars['Boolean'];
  createPost: Post;
  deletePost: Scalars['Boolean'];
  updatePost: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  user: RegisterInput;
};


export type MutationLoginArgs = {
  user: LoginInput;
};


export type MutationConfirmMailArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  payload: ChangePasswordInput;
};


export type MutationSetLocaleArgs = {
  locale: Scalars['String'];
};


export type MutationCreatePostArgs = {
  post: PostInput;
};


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  post: PostOptions;
  id: Scalars['String'];
};

export type RegisterInput = {
  nameFirst: Scalars['String'];
  nameLast: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ChangePasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type PostInput = {
  content: Array<ContentInput>;
};

export type ContentInput = {
  locale: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
};

export type PostOptions = {
  content: Array<ContentOptions>;
};

export type ContentOptions = {
  locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type Locale = {
  __typename?: 'Locale';
  label: Scalars['String'];
  name: Scalars['String'];
};

export type Mail = {
  __typename?: 'Mail';
  template: Content;
  subject: Content;
};

export type ContentQueryVariables = Exact<{
  label: Scalars['String'];
}>;


export type ContentQuery = (
  { __typename?: 'Query' }
  & { content?: Maybe<(
    { __typename?: 'Content' }
    & Pick<Content, 'text'>
  )> }
);

export type PostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'createdAt'>
    & { title: (
      { __typename?: 'Content' }
      & Pick<Content, 'text'>
    ), body: (
      { __typename?: 'Content' }
      & Pick<Content, 'id' | 'text'>
    ) }
  )> }
);

export type PostsQueryVariables = Exact<{
  page: Scalars['Float'];
}>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<(
    { __typename?: 'PostsOutput' }
    & Pick<PostsOutput, 'pageCount'>
    & { posts?: Maybe<Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'createdAt'>
      & { title: (
        { __typename?: 'Content' }
        & Pick<Content, 'text'>
      ) }
    )>> }
  )> }
);


export const ContentDocument = gql`
    query content($label: String!) {
  content(label: $label) {
    text
  }
}
    `;
export type ContentComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ContentQuery, ContentQueryVariables>, 'query'> & ({ variables: ContentQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ContentComponent = (props: ContentComponentProps) => (
      <ApolloReactComponents.Query<ContentQuery, ContentQueryVariables> query={ContentDocument} {...props} />
    );
    
export type ContentProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ContentQuery, ContentQueryVariables>
    } & TChildProps;
export function withContent<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ContentQuery,
  ContentQueryVariables,
  ContentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ContentQuery, ContentQueryVariables, ContentProps<TChildProps, TDataName>>(ContentDocument, {
      alias: 'content',
      ...operationOptions
    });
};

/**
 * __useContentQuery__
 *
 * To run a query within a React component, call `useContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentQuery({
 *   variables: {
 *      label: // value for 'label'
 *   },
 * });
 */
export function useContentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ContentQuery, ContentQueryVariables>) {
        return ApolloReactHooks.useQuery<ContentQuery, ContentQueryVariables>(ContentDocument, baseOptions);
      }
export function useContentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ContentQuery, ContentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ContentQuery, ContentQueryVariables>(ContentDocument, baseOptions);
        }
export type ContentQueryHookResult = ReturnType<typeof useContentQuery>;
export type ContentLazyQueryHookResult = ReturnType<typeof useContentLazyQuery>;
export type ContentQueryResult = ApolloReactCommon.QueryResult<ContentQuery, ContentQueryVariables>;
export const PostDocument = gql`
    query Post($id: String!) {
  post(postId: $id) {
    createdAt
    title {
      text
    }
    body {
      id
      text
    }
  }
}
    `;
export type PostComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostQuery, PostQueryVariables>, 'query'> & ({ variables: PostQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PostComponent = (props: PostComponentProps) => (
      <ApolloReactComponents.Query<PostQuery, PostQueryVariables> query={PostDocument} {...props} />
    );
    
export type PostProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PostQuery, PostQueryVariables>
    } & TChildProps;
export function withPost<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostQuery,
  PostQueryVariables,
  PostProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PostQuery, PostQueryVariables, PostProps<TChildProps, TDataName>>(PostDocument, {
      alias: 'post',
      ...operationOptions
    });
};

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostQuery, PostQueryVariables>) {
        return ApolloReactHooks.useQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
      }
export function usePostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = ApolloReactCommon.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query Posts($page: Float!) {
  posts(page: $page) {
    pageCount
    posts {
      id
      createdAt
      title {
        text
      }
    }
  }
}
    `;
export type PostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostsQuery, PostsQueryVariables>, 'query'> & ({ variables: PostsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PostsComponent = (props: PostsComponentProps) => (
      <ApolloReactComponents.Query<PostsQuery, PostsQueryVariables> query={PostsDocument} {...props} />
    );
    
export type PostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PostsQuery, PostsQueryVariables>
    } & TChildProps;
export function withPosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostsQuery,
  PostsQueryVariables,
  PostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PostsQuery, PostsQueryVariables, PostsProps<TChildProps, TDataName>>(PostsDocument, {
      alias: 'posts',
      ...operationOptions
    });
};

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        return ApolloReactHooks.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
      }
export function usePostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = ApolloReactCommon.QueryResult<PostsQuery, PostsQueryVariables>;