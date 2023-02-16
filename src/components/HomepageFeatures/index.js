import React from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

export default function HomepageFeatures() {
  return (
    <section>
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

    </section>
  );
}
