import React from "react";
import Link from "next/link";

const StringsWithHashtags: React.FC<{ strings: string[] }> = ({ strings }) => {
  return (
    <div>
      {strings.map((str, index) => (
        <Link
          key={index}
          href={`/topics/${str}`}
          style={{ marginRight: "10px" }}
          className="green_hover"
        >
          #{str}
        </Link>
      ))}
    </div>
  );
};

export default StringsWithHashtags;
