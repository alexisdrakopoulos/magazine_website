import Image from "next/image";
import TopicBlock from "../../components/simpler_topic_list";

function TopicsLayout() {
  const python_main = ["General Topics", "Libraries", "Scientific Computing"];
  const python_extra = [
    "Tips & Tricks",
    "Low Level Python",
    "Design Patterns",
    "High Performance",
    "Testing",
  ];
  const compsci_main = ["Languages", "OOP"];
  const compsci_extra = [
    "Functional",
    "System Design",
    "Concurrency",
    "Algorithms",
    "Career & Life",
  ];
  const mathematics_main = ["Linear Algebra", "Statistical Learning"];
  const mathematics_extra = [
    "Optimization",
    "Iterative Methods",
    "Deep Learning",
    "Monte Carlo",
    "Simulations",
  ];

  return (
    <div className="ArticlePage">
      <header className="u-Container content">
        <ul className="u-Grid column">
          <li className="ArticleBlock large">
            <div className="article-grid topic-dropshadow">
              <div className="image small-art topic-art-size">
                <Image
                  src="/career_surreal.png"
                  alt="alexis drakopoulos profile"
                  width={400}
                  height={400}
                  className="topic-art-size"
                ></Image>
              </div>
              <div className="u-Grid TopicGrid" style={{ paddingTop: "50px" }}>
                <div>
                  <TopicBlock
                    href="/topics"
                    title="Software Engineering"
                    topics={compsci_main}
                  />
                </div>
                <div>
                  <TopicBlock href="/topics" topics={compsci_extra} />
                </div>
              </div>
            </div>
          </li>

          <li className="ArticleBlock large flipped">
            <div className="article-grid topic-dropshadow">
              <div className="image small-art topic-art-size">
                <Image
                  src="/code_picture.png"
                  alt="abstract math dali style"
                  width={400}
                  height={400}
                  className="topic-art-size"
                ></Image>
              </div>
              <div className="u-Grid TopicGrid" style={{ paddingTop: "50px" }}>
                <div>
                  <TopicBlock
                    href="/topics"
                    title="Python"
                    topics={python_main}
                  />
                </div>
                <div>
                  <TopicBlock href="/topics" topics={python_extra} />
                </div>
              </div>
            </div>
          </li>

          <li className="ArticleBlock large">
            <div className="article-grid topic-dropshadow">
              <div className="image small-art topic-art-size">
                <Image
                  src="/surreal_math.png"
                  alt="alexis drakopoulos profile"
                  width={400}
                  height={400}
                  className="topic-art-size"
                ></Image>
              </div>
              <div className="u-Grid TopicGrid" style={{ paddingTop: "50px" }}>
                <div>
                  <TopicBlock
                    href="/topics"
                    title="Applied Mathematics"
                    topics={mathematics_main}
                  />
                </div>
                <div>
                  <TopicBlock href="/topics" topics={mathematics_extra} />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default TopicsLayout;
