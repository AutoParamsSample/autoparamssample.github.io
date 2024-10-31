import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

const simpleExampleJavaCode = `@ParameterizedTest
@AutoSource
void parameterizedTest(int a, int b) {
    var sut = new Calculator();
    int actual = sut.add(a, b);
    assertEquals(a + b, actual);
}`;

const simpleExampleKotlinCode = `@ParameterizedTest
@AutoSource
fun parameterizedTest(a: Int, b: Int) {
    val sut = Calculator()
    val actual: Int = sut.add(a, b)
    assertEquals(a + b, actual)
}`;

export default function HomepageCodeExamples(): JSX.Element {
    return (
        <section className={styles.codeExamples}>
            <div className="container">
                <div className="row">
                    <div className={"col col--5"}>
                        <h2>A Simple Example</h2>
                        <p>
                            The automatic generation of test data by AutoParams can potentially eliminate
                            the need for triangulation in tests, streamlining the testing process.
                        </p>
                    </div>
                    <div className="col col--7">
                        <Tabs groupId="codeLanguage">
                            <TabItem value="java" label="Java">
                                <CodeBlock language="java">{simpleExampleJavaCode}</CodeBlock>
                            </TabItem>
                            <TabItem value="kotlin" label="Kotlin">
                                <CodeBlock language="kotlin">{simpleExampleKotlinCode}</CodeBlock>
                            </TabItem>
                        </Tabs>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
}