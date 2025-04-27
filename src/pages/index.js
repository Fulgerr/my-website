import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures'; 

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
      </div>
    </header>
  );
}

function HomepageButtons() {
  return (
    <div className={styles.homepageButtonsContainer}> {/* Keep the original container style */}
      <div className={styles.buttons}> {/* Keep the original buttons styling */}
        <Link
          className="button button--secondary button--lg"
          to="/release-notes/Release%20notes/2024.10.0"
        >
          Release Notes
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="/docs/2025.10/category/getting-started"
        >
          User Guide
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="/api-guide/category/data-service-openapi"
        >
          API Guide
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        {/* Replace HomepageFeatures with our buttons */}
        <HomepageButtons />
      </main>
    </Layout>
  );
}