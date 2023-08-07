import React from "react";

const StringsWithHashtags: React.FC<{ strings: string[] }> = ({ strings }) => {
  // Join the array into a single string, placing a hashtag before each word and a space after
  const stringWithHashtags = strings.map((str) => `#${str}`).join(" ");

  return <div>{stringWithHashtags}</div>;
};

export default StringsWithHashtags;
