import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container col col--8 col--offset-2')}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              Start reading
          </Link>
        </div>
          <p className="margin-top--md">
              <em>It's completely free!</em>
          </p>
      </div>
    </header>
  );
}

function FeaturesSection() {
    return (
        <div className={clsx('margin-vert--lg', 'padding-vert--lg')}>
            <div className="container">
                <div className="row">
                    <div className="col col--10 col--offset-1">
                        <h2
                            className={clsx(
                                'text--center',
                                'margin-bottom--xl',
                            )}>
                            Why Frontend Garage?
                        </h2>
                        <div className={clsx('row')}>
                            <div className={clsx('col', 'col--4')}>
                                <h3>💾 Data Structures</h3>
                                <p>
                                    Learn Data Structures form zero to hero with great examples.
                                </p>
                                <a href={useBaseUrl('data-structures')}>
                                    <strong>Learn more</strong>
                                </a>
                            </div>
                            <div className={clsx('col', 'col--4')}>
                                <h3>🧠 Algorithms</h3>
                                <p>
                                    Algorithms is an essential topic that every Software Engineer should master.
                                </p>
                                <a href={useBaseUrl('algorithms')}>
                                    <strong>Learn more</strong>
                                </a>
                            </div>
                            <div className={clsx('col', 'col--4')}>
                                <h3>💯 From zero to hero</h3>
                                <p>
                                    Go from zero to hero with Frontend Garage.
                                    Learn the core of Software Development!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
