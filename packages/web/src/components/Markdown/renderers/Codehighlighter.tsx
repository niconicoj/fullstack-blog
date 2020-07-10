import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import gruvbox from './gruvbox-dark-plus';

interface codeHighlighterProps {
  language: string,
  value: string | undefined
}

const defaultFont = {
  'fontFamily': "Roboto Mono"
} as React.CSSProperties;

const CodeHighlighter = (props: codeHighlighterProps) => {
  return (
    <SyntaxHighlighter language={props.language} codeTagProps={{style: defaultFont}} style={gruvbox}>{props.value ?? ''}</SyntaxHighlighter>
  );
}

export default CodeHighlighter;