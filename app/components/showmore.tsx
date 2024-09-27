import React, { useState } from "react";

interface ShowMoreProps {
  text: string;
  lines?: number;
}

const ShowMore: React.FC<ShowMoreProps> = ({ text, lines = 2 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="pt-4">
      <p className={`${isExpanded ? '' : `line-clamp-${lines}`}`}>
        {text}
      </p>
      <button
        onClick={toggleExpand}
        className="text-muted-foreground hover:underline mt-1"
      >
        {isExpanded ? 'show less' : 'show more'}
      </button>
    </div>
  );
};

export default ShowMore;
