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

  // A simple approximation for truncating text
  const getTruncatedText = (text: string, lines: number): string => {
    const words = text.split(" ");
    const avgCharsPerLine = 80; // Approximation: Adjust this based on your actual content
    const maxChars = avgCharsPerLine * lines;

    if (text.length <= maxChars) {
      return text;
    }

    let truncatedText = words[0];
    for (let i = 1; i < words.length; i++) {
      if (truncatedText.length + words[i].length + 1 > maxChars) {
        return truncatedText + "...";
      }
      truncatedText += " " + words[i];
    }

    return truncatedText;
  };

  const truncatedText = getTruncatedText(text, lines);

  return (
    <div className="pt-4">
      <span>
        {isExpanded ? text : truncatedText}
        {!isExpanded && truncatedText !== text && (
          <button
            onClick={toggleExpand}
            className="text-muted-foreground ml-1 hover:underline"
          >
            show more
          </button>
        )}
        {isExpanded && (
          <button
            onClick={toggleExpand}
            className="block text-muted-foreground hover:underline"
          >
            show less
          </button>
        )}
      </span>
    </div>
  );
};

export default ShowMore;
