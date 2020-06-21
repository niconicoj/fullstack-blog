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
};


export type QueryPostArgs = {
  postId: Scalars['String'];
};


export type QueryPostsArgs = {
  page?: Maybe<Scalars['Float']>;
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
      ), body: (
        { __typename?: 'Content' }
        & Pick<Content, 'text'>
      ) }
    )>> }
  )> }
);


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
      body {
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