import React from "react";

export interface QuoteProps {
  author: string;
  text: string;
  source?: string;
}

const QuoteComponent: React.FC<QuoteProps> = ({ author, text, source }) => {
  return (
    <div className="quote-container">
      <p className="quote-text">{text}</p>
      <p className="quote-author">— {author}</p>
      {source && <p className="quote-source">{source}</p>}
    </div>
  );
};

export default QuoteComponent;
