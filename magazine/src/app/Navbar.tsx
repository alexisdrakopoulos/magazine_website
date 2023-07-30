import Link from "next/link";
import Image from "next/image";
import { Trispace } from "next/font/google";

const trispace = Trispace({
  weight: "500",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="PageNav">
      <div className="u-Container">
        <div className="column">
          <ul className="nav">
            <li className="logo">
              <Link href="/">
                <Image
                  src="/temporary_logo.svg"
                  alt="minorversion"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    paddingBottom: "3px",
                  }} // optional
                ></Image>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className={["nav-item", trispace.className].join(" ")}>
                  Topics
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className={["nav-item", trispace.className].join(" ")}>
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className={["nav-item", trispace.className].join(" ")}>
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
