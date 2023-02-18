import React from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import Translate from '@docusaurus/Translate';

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
                            <Translate id="homePageFeatures.heading" >Why Frontend Garage?</Translate>
                        </h2>
                        <div className={clsx('row')}>
                            <div className={clsx('col', 'col--4')}>
                                <h3><Translate id="homePageFeatures.title.ds">💾 Data Structures</Translate></h3>
                                <p>
                                   <Translate id="homePageFeatures.description.ds">Learn Data Structures form zero to hero with great examples.</Translate>
                                </p>
                                <a href={useBaseUrl('data-structures')}>
                                    <strong><Translate>Learn more</Translate></strong>
                                </a>
                            </div>
                            <div className={clsx('col', 'col--4')}>
                                <h3><Translate id="homePageFeatures.title.algorithms">🧠 Algorithms</Translate></h3>
                                <p>
                                    <Translate id="homePageFeatures.description.algorithms">Algorithms is an essential topic that every Software Engineer should master.</Translate>
                                </p>
                                <a href={useBaseUrl('algorithms')}>
                                    <strong><Translate>Learn more</Translate></strong>
                                </a>
                            </div>
                            <div className={clsx('col', 'col--4')}>
                                <h3><Translate id="homePageFeatures.title.features">💯 From zero to hero</Translate></h3>
                                <p>
                                    <Translate id="homePageFeatures.description.features">Go from zero to hero with Frontend Garage.
                                        Learn the core of Software Development!</Translate>
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
