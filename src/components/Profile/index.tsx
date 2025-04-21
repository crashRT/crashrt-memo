import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

export default function Profile(): JSX.Element {
  return (
    <section className="container text--center">
      <h2 className={styles.h2}>Profile</h2>
      <img className={styles.LogoImage} src="/img/crashRT_180px.png" />
      <p>どこかの情報系大学生</p>
      <p>
        ネットワークやサーバー管理、web開発など
        <br />
        昔は3DCG・MotionGraphicsを作ってた
      </p>
      <div className="container">
        <h3>Link</h3>
        <div className="row">
          <div className="col col--4">
            <a href="https://crashrt.work">
              <p>Portfolio</p>
            </a>
          </div>
          <div className="col col--4">
            <a href="https://crashrt.hatenablog.com/">
              <p>はてなブログ</p>
            </a>
          </div>
          <div className="col col--4">
            <a href="https://github.com/crashRT">
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
