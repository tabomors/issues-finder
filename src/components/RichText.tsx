import React from 'react';
import Markdown from 'markdown-to-jsx';

export const RichText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='rich-text'>
      <Markdown>{text}</Markdown>
    </div>
  );
};
