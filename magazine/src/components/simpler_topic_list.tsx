import React from "react";
import Link from "next/link";

type TopicProps = {
  href: string;
  title?: string;
  topics: string[];
};

const TopicBlock: React.FC<TopicProps> = ({ href, title, topics }) => (
  <>
    {title && (
      <div className="text">
        <div className="head TopicHover">
          <Link href={href}>
            <h3 className="t-TitleSerif large title ">{title}</h3>
          </Link>
        </div>
      </div>
    )}
    <ul>
      {topics.map(
        (
          topic,
          index // map through topics array and display each topic
        ) => (
          <li key={index}>
            <Link href={href}>
              <div
                className="IssueTitle tiny u-Arrow right"
                style={{
                  minWidth: "250px",
                  maxWidth: "250px",
                  alignItems: "center",
                }}
              >
                <h3
                  className="t-TitleSans title"
                  style={{ margin: "0px", padding: "10px", color: "#000000" }}
                >
                  {topic}
                </h3>
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  </>
);

export default TopicBlock;
