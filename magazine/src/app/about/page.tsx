import Image from "next/image";

function AboutLayout() {
  return (
    <div className="ArticlePage">
      <header className="u-Container content">
        <ul className="u-Grid column">
          <li className="ArticleBlock large">
            <div className="article-grid">
              <div className="image small-art">
                <Image
                  src="/me.jpeg"
                  alt="alexis drakopoulos profile"
                  width={300}
                  height={300}
                  style={{ borderRadius: "50%", paddingBottom: "15px" }}
                ></Image>
              </div>
              <div className="text large-text">
                <div className="head">
                  <h3 className="t-TitleSans title">About Me</h3>
                </div>
                <div className="t-BodySerif intro">
                  Hi! I&apos;m an ML Engineer passionate about writing clean
                  maintainable code. My interests range from low latency/high
                  performance systems to higher level theory such as system
                  design. I also have an interest in various areas of applied
                  mathematics such as statistical learning & probabilistic
                  programming. Feel free to reach out through the contact form!
                </div>
              </div>
            </div>
          </li>

          <li className="ArticleBlock large flipped">
            <div className="article-grid">
              <div className="image small-art">
                <Image
                  src="/abstract_math.png"
                  alt="abstract math dali style"
                  width={300}
                  height={300}
                  style={{ borderRadius: "50%", paddingBottom: "15px" }}
                ></Image>
              </div>
              <div className="text large-text">
                <div className="head">
                  <h3 className="t-TitleSans title">About MinorVersion</h3>
                </div>
                <div className="t-BodySerif intro">
                  MinorVersion is a small magazine/blog I started to share my
                  own perspectives, experiences and ideas relating to software
                  engineering, computer science and applied mathematics.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default AboutLayout;
