// components/MathRenderer.tsx
import React from 'react';
import katex from 'katex';

interface MathRendererProps {
  equation: string;
  block?: boolean; // ブロック形式を指定するオプション
}

const MathRenderer: React.FC<MathRendererProps> = ({ equation, block = false }) => {
  const html = katex.renderToString(equation, {
    throwOnError: false, // エラーが発生しても無視
    displayMode: block, // ブロック形式を指定
  });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MathRenderer;