import { usePostQuery } from '../../generated/graphql';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import moment from 'moment';
import CodeHighlighter from './renderers/Codehighlighter';
import { Typography, makeStyles, createStyles } from '@material-ui/core';
import TableRenderer from './renderers/TableRenderer';
import THeaderRenderer from './renderers/THeaderRenderer';
import TRowRenderer from './renderers/TRowRenderer';
import TBodyRenderer from './renderers/TBodyRenderer';
import ParagraphRenderer from './renderers/ParagraphRenderer';
import TCellRenderer from './renderers/TCellRenderer';
import QuoteRenderer from './renderers/QuoteRenderer';
import Monospace from '../Monospace';
import ListItemRenderer from './renderers/ListItemRenderer';
import InlineCodeRenderer from './renderers/InlineCodeRenderer';

interface PostProps {
  postId: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: "#e2d7bb"
    },
    timestamp: {
      marginBottom: "16px"
    }
  })
)

const Post = (props : PostProps) => {
  const { data, error, loading } = usePostQuery({ variables: { id: props.postId } });
  const classes = useStyles();
  
  if(loading) return (
    <div>loading</div>
  );
  if(error) return (
    <div>Error : {error.message}</div>
  );

  return (
    <div className={classes.root}>
      <Typography variant="h1">  
        {data?.post?.title.text}
      </Typography>
      <Monospace className={classes.timestamp}>
        {"// "+moment(data?.post?.createdAt).format("dddd, MMMM Do YYYY")}
      </Monospace>
      <div>
        <ReactMarkdown 
          source={(data?.post?.body.text as string)}
          renderers={{
            paragraph: ParagraphRenderer,
            code: CodeHighlighter,
            table: TableRenderer,
            tableHead: THeaderRenderer,
            tableRow: TRowRenderer,
            tableBody: TBodyRenderer,
            tableCell: TCellRenderer,
            blockquote: QuoteRenderer,
            listItem: ListItemRenderer,
            inlineCode: InlineCodeRenderer
          }}
        />
      </div>
    </div>
  );
};

export default Post;
