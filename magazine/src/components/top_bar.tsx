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
      style={{ paddingBottom: "30px", paddingTop: "60px" }}
    >
      <div
        style={{
          gridColumnEnd: "span 2",
          borderTop: "4px solid #3dffb8",
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
          <span style={{ backgroundColor: "#3dffb8" }}>Announcements</span>
        </h4>
        <div>text test testing this text is here oh here</div>
      </div>
      <div
        style={{
          gridColumnStart: "span 2",
          borderTop: "4px solid #3dffb8",
          marginLeft: "40px",
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
          <span style={{ backgroundColor: "#3dffb8" }}>Recent Posts</span>
        </h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
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
