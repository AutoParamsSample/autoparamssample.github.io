import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

type PackageCodeGroup = {
    members: PackageCodeItem[],
}

type PackageCodeItem = {
    label: string,
    forLanguage: string,
    language: string,
    code: string,
}

const mavenForJavaCode = `<dependency>
<groupId>io.github.autoparams</groupId>
<artifactId>autoparams</artifactId>
<version>8.3.0</version>
</dependency>`;

const mavenForKotlinCode = `<dependency>
<groupId>io.github.autoparams</groupId>
<artifactId>autoparams-kotlin</artifactId>
<version>8.3.0</version>
</dependency>`;

const gradleForJavaCode = `testImplementation 'io.github.autoparams:autoparams:8.3.0'`;
const gradleForKotlinCode = `testImplementation 'io.github.autoparams:autoparams-kotlin:8.3.0'`;

const PackageCodeGroups: PackageCodeGroup[] = [
    {
        members: [
            {
                label: 'Maven for Java',
                forLanguage: 'java',
                language: 'xml',
                code: mavenForJavaCode,
            },
            {
                label: 'Maven for Kotlin',
                forLanguage: 'kotlin',
                language: 'xml',
                code: mavenForKotlinCode,
            }
        ]
    },
    {
        members: [
            {
                label: 'Gradle for Java',
                forLanguage: 'java',
                language: 'groovy',
                code: gradleForJavaCode,
            },
            {
                label: 'Gradle for Kotlin',
                forLanguage: 'kotlin',
                language: 'groovy',
                code: gradleForKotlinCode,
            }
        ]
    }
];

function CodeGroupTabs({members}: PackageCodeGroup) {
    return (
        <Tabs groupId="codeLanguage">
            {members.map(({label, forLanguage, language, code}, idx) => (
                <TabItem key={idx} value={forLanguage} label={label}>
                    <CodeBlock language={language}>{code}</CodeBlock>
                </TabItem>
            ))}
        </Tabs>
    );
}

export default function HomepageQuickStart(): JSX.Element {
    return (
        <section className={styles.quickStart}>
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <h2 className={styles.codeTitle}>Quick Start</h2>
                        <p className={styles.description}>You can use it right away by installing the required packages for Java or Kotlin.</p>
                    </div>
                    <div className="col col--12">
                        {
                            PackageCodeGroups.map((props, idx) => (
                                <CodeGroupTabs key={idx} {...props} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}