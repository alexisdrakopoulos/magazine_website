import Link from "next/link";
import ArticleBlockTiny from "./article_block_tiny";
import { allPosts } from "contentlayer/generated";

export default function Topbar() {
  // get the last few posts as recent posts
  // we get all posts that have a topic tag associated with our topic
  let sortedPosts = allPosts.sort((a, b) => -a.date.localeCompare(b.date));
  // select last 5 posts
  sortedPosts = sortedPosts.slice(0, 3);

  return (
    <li
      className="ArticleBlock large"
      style={{
        paddingBottom: "30px",
        paddingTop: "60px",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      <div
        style={{
          borderTop: "4px solid var(--greenColor)",
          flex: 1,
          display: "inline-block",
          position: "relative",
        }}
      >
        <h4
          style={{
            top: "0",
            left: "0",
            margin: "0",
            transform: "translateY(-120%)",
          }}
        >
          <span style={{ backgroundColor: "var(--greenColor)", color: "#000" }}>
            Announcements
          </span>
        </h4>
        <div style={{ display: "flex", height: "100%", minWidth: "250px" }}>
          <ArticleBlockTiny
            href="/" // Or you may want to set the href based on something in your Post data
            title="Test Announcement is here"
            paragraph="test intro"
            topics={["test1", "test2"]}
            document_type="test3"
          />
        </div>
      </div>
      <div
        style={{
          borderTop: "4px solid var(--greenColor)",
          flex: 3,
        }}
      >
        <h4
          style={{
            top: "0",
            left: "0",
            margin: "0",
            transform: "translateY(-120%)",
          }}
        >
          <span
            style={{
              backgroundColor: "var(--greenColor)",
              color: "#000",
            }}
          >
            Recent Posts
          </span>
        </h4>
        <div
          style={{
            display: "flex",
            height: "100%",
            flexWrap: "wrap",
          }}
        >
          {sortedPosts.map((post, index) => (
            <ArticleBlockTiny
              key={index}
              href={`/blog/${post.slug}`} // Or you may want to set the href based on something in your Post data
              title={post.title}
              paragraph={post.intro}
              topics={post.topics}
              document_type={post.document_type}
            />
          ))}
        </div>
      </div>
    </li>
  );
}
