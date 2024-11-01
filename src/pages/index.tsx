import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import HomepageCodeExamples from '../components/HomepageCodeExamples';
import HomepageQuickStart from '../components/HomepageQuickStart';
import HeadingDecoration from '../components/HeadingDecoration';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <HeadingDecoration />
        <div className={styles.heading}>
          <Heading as="h1" className={clsx('hero__title', styles.headingTitle)}>
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link to="docs">
              <button className="button button--secondary" role="button">Get Started</button>
            </Link>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=AutoParams&repo=AutoParams&type=star&count=true&size=large"
                width="170" height="30" title="GitHub"></iframe>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageQuickStart />
        <HomepageCodeExamples />
      </main>
    </Layout>
  );
}
