import { usePostQuery } from '../../generated/graphql';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import CodeHighlighter from './Codehighlighter';
import { Typography } from '@material-ui/core';
import BodyRenderer from './BodyRenderer';

const Post = () => {
  const { data, error, loading } = usePostQuery({ variables: { id: 'd8ba0a8c-00d9-44f1-bdfb-4a577cc257ab' } });

  
  if(loading) return (
    <div>loading</div>
  );
  if(error) return (
    <div>Error : {error.message}</div>
  );

  return (
    <div>
      <Typography variant="h1">
        {data?.post?.title.text}
      </Typography>
      <div>
        <ReactMarkdown 
          source={(data?.post?.body.text as string)}
          renderers={{
            code: CodeHighlighter,
            text: BodyRenderer
          }}
        />
      </div>
    </div>
  );
};

export default Post;
