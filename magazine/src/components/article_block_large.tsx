import React from "react";
import Image from "next/image";
import Link from "next/link";

type ArticleBlockLargeProps = {
  href: string;
  image_src: string;
  image_alt: string;
  title: string;
  paragraph: string;
};

const ArticleBlockLarge: React.FC<ArticleBlockLargeProps> = ({
  href,
  image_src,
  image_alt,
  title,
  paragraph,
}) => (
  <li className="ArticleBlock large">
    <Link href={href}>
      <div className="u-Art art">
        <Image
          src={image_src}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            paddingBottom: "3px",
          }} // optional
          alt={image_alt}
          unoptimized
        />
      </div>
      <div className="text">
        <div className="head">
          <h3
            className="t-TitleSerif large title"
            // style={{ maxWidth: "400px" }} // NOT SURE WHY WE WANT THIS?
          >
            {title}
          </h3>
        </div>
        <div className="t-BodySans large intro">{paragraph}</div>
      </div>
    </Link>
  </li>
);

export default ArticleBlockLarge;
