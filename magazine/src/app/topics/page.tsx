import Image from "next/image";
import TopicBlock from "../../components/simpler_topic_list";

function TopicsLayout2() {
  const python_topics = ["Topic 1", "Topic 2", "Topic 3"];
  const python_topics2 = [
    "Topic 1",
    "Topic 2",
    "Topic 3",
    "Topic 4",
    "Topic 5",
  ];
  const software_engineering_topics = ["Topic 1", "Topic 2", "Topic 3"];
  const linear_algebra_topics = ["Topic 1", "Topic 2", "Topic 3"];
  const stochastic_topics = ["Topic 1", "Topic 2", "Topic 3"];

  return (
    <div className="ArticlePage">
      <header className="u-Container content">
        <ul className="u-Grid column">
          <li className="ArticleBlock large">
            <div className="article-grid topic-dropshadow">
              <div className="image small-art">
                <Image
                  src="/python_snake.jpg"
                  alt="alexis drakopoulos profile"
                  width={300}
                  height={300}
                  style={{ borderRadius: "50%", paddingBottom: "15px" }}
                ></Image>
              </div>
              <div className="u-Grid TopicGrid">
                <div className="text">
                  <TopicBlock
                    href="/topics"
                    title="Python"
                    topics={python_topics}
                  />
                </div>
                <div className="text">
                  <TopicBlock href="/topics" topics={python_topics2} />
                </div>
              </div>
            </div>
          </li>

          <li className="ArticleBlock large flipped">
            <div className="article-grid topic-dropshadow">
              <div className="image small-art">
                <Image
                  src="/phone_snake.jpg"
                  alt="abstract math dali style"
                  width={300}
                  height={300}
                  style={{ borderRadius: "50%", paddingBottom: "15px" }}
                ></Image>
              </div>
              <div className="u-Grid TopicGrid">
                <div className="text">
                  <TopicBlock
                    href="/topics"
                    title="Python"
                    topics={python_topics}
                  />
                </div>
                <div className="text">
                  <TopicBlock href="/topics" topics={python_topics2} />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default TopicsLayout2;
