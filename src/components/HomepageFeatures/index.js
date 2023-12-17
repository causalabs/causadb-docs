import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "Zero Overhead CausalOps",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: (
            <>
                Don't even think about servers. We handle the complexities of
                infrastructure management, so your team can focus on what
                matters.
            </>
        ),
    },
    {
        title: "Easy to Use",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: (
            <>
                Simple interface for creating, managing, and deploying causal AI
                models. Integrate with your existing data stack with minimal
                effort.
            </>
        ),
    },
    {
        title: "Cloud Native",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
            <>
                CausaDB is built on modern cloud technologies. Designed to scale
                with your needs, from solo developers to large teams.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
            <div className="text--center padding-horiz--md">
                <Heading as="h2">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
