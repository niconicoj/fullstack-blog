import React from 'react';
import TableRenderer from '../Markdown/renderers/TableRenderer';
import THeaderRenderer from '../Markdown/renderers/THeaderRenderer';
import TRowRenderer from '../Markdown/renderers/TRowRenderer';
import TBodyRenderer from '../Markdown/renderers/TBodyRenderer';
import ParagraphRenderer from '../Markdown/renderers/ParagraphRenderer';
import TCellRenderer from '../Markdown/renderers/TCellRenderer';
import QuoteRenderer from '../Markdown/renderers/QuoteRenderer';
import ListItemRenderer from '../Markdown/renderers/ListItemRenderer';
import InlineCodeRenderer from '../Markdown/renderers/InlineCodeRenderer';
import CodeHighlighter from '../Markdown/renderers/Codehighlighter';
import ReactMarkdown from 'react-markdown';
import remarkTypescript from 'remark-typescript';

interface MarkdownProps {
  source: string
}
const Markdown = (props: MarkdownProps) => {
return <ReactMarkdown 
          source={props.source}
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
          plugins={[remarkTypescript]}
        />  
}

export default Markdown