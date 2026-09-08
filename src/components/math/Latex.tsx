import React, { useMemo } from 'react';
import katex from 'katex';

interface LatexProps {
  formula: string;
  displayMode?: boolean;
  className?: string;
}

export const Latex: React.FC<LatexProps> = ({ formula, displayMode = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(formula, {
        displayMode,
        throwOnError: false,
      });
    } catch (e) {
      return formula;
    }
  }, [formula, displayMode]);

  return (
    <span
      className={`inline-block ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
