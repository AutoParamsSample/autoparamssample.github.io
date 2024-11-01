import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Just like the @ValueSource or @CsvSource annotations, when you add the @AutoSource annotation to a parameterized test method, AutoParams automatically generates the appropriate test arguments.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Using AutoParams in parameterized methods allows you to skip the repetitive work of constructing test data. The required test data is automatically generated, so you can focus on what really matters: your domain-specific requirements.
      </>
    ),
  },
  {
    title: 'Enhanced Coverage',
    description: (
      <>
        By using random values ​​instead of static data, AutoParams allows your tests to cover a wider range of cases. Each test iteration validates your application under a variety of conditions, uncovering edge cases that might not be noticed with fixed values.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className="col col--4">
      <div className="text--center">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
