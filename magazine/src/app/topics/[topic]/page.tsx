import { allPosts } from "contentlayer/generated";
import ArticleBlockLarge from "../../../components/article_block_large";
import ArticleBlockHalf from "../../../components/article_block_half";

export function generateStaticParams() {
  // here we return all the different topics and associated metadata
  return [
    { topic: "software-engineering" },
    { topic: "python" },
    { topic: "applied-mathematics" },
  ];
}

// topic data type
type Topic = {
  title: string;
  description: string;
  image_src: string;
  image_alt: string;
};

// data associated with topics
const topic_data: Record<string, Topic> = {
  "software-engineering": {
    title: "Software Engineering",
    description:
      "Are ML Models in modern OOP toolkits finite state machines? My goal is not to convince you that this has some deeper implication, but rather to discuss the resulting design implications and review the current approaches in many OSS libraries. ",
    image_src: "/science_shapes.png",
    image_alt: "Picture of the author",
  },
  python: {
    title: "Python",
    description:
      "Are ML Models in modern OOP toolkits finite state machines? My goal is not to convince you that this has some deeper implication, but rather to discuss the resulting design implications and review the current approaches in many OSS libraries. ",
    image_src:
      "/bsodjunkie_Mathematical_Snake_surreal_diagram_notes_surreal_ske_10d75991-63ce-4bb0-ae18-24fbb4a1af09.png",
    image_alt: "Picture of the author",
  },
  "applied-mathematics": {
    title: "Applied Mathematics",
    description:
      "Are ML Models in modern OOP toolkits finite state machines? My goal is not to convince you that this has some deeper implication, but rather to discuss the resulting design implications and review the current approaches in many OSS libraries. ",
    image_src:
      "/bsodjunkie_Mathematics_linear_algebra_matrix_decomposition_surr_e064933c-3917-4f2a-8682-0eb28671f6d4.png",
    image_alt: "Picture of the author",
  },
};

interface TopicBannerProp {
  image_src: string;
  image_alt: string;
  title: string;
  paragraph: string;
}

interface TopicProp {
  href: string;
  image_src: string;
  image_alt: string;
  title: string;
  paragraph: string;
}

interface TopicLayoutProps {
  topicBanner: TopicBannerProp;
  topics: TopicProp[];
}

const TopicLayout: React.FC<TopicLayoutProps> = ({ topicBanner, topics }) => {
  return (
    <div className="IssuePage">
      <div className="u-Container content">
        <ul className="u-Grid column">
          <ArticleBlockLarge {...topicBanner} />
          {topics.map((article, index) => (
            <ArticleBlockHalf key={index} {...article} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Page({ params }: { params: { topic: string } }) {
  const { topic } = params;

  // get metadata associated with our topic
  const currentTopic: Topic = topic_data[topic];

  // we get all posts that have a topic tag associated with our topic
  let relevantPosts = allPosts.filter((post) => post.topics.includes(topic));

  // Sort the posts by date - earliest first
  relevantPosts.sort((a, b) => -a.date.localeCompare(b.date));

  // log the title of all posts found for debugging
  console.log("Dynamically generating the following blog posts:");
  relevantPosts.forEach((post) => console.log(post.title));

  // Build the topics array
  const topics = relevantPosts.map((post) => ({
    href: `/blog/${post.slug}`,
    image_src: post.image,
    image_alt: "TEMPORARY",
    title: post.title,
    paragraph: post.intro,
  }));

  return (
    <TopicLayout
      topicBanner={{
        image_src: currentTopic.image_src,
        image_alt: currentTopic.image_alt,
        title: currentTopic.title,
        paragraph: currentTopic.description,
      }}
      topics={topics}
    />
  );
}

// so that we don't dynamically generate topic URLs that don't exist!
export const dynamicParams = false;
