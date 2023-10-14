import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  className: string;
  node: any;
};
export const CodeBlock = (props: Props) => {
  const { children, className, node, ...rest } = props;
  const match = /language-(\w+)/.exec(className || '');

  return match ? (
    // @ts-expect-error
    <SyntaxHighlighter
      {...rest}
      style={a11yDark}
      language={match[1]}
      PreTag='div'
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};
