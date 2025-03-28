import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Público final',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				Cidadão comum gostaria de ter opções para conhecer melhor a agenda de eventos, as oportunidades, os espaços e agentes culturais.
			</>
		),
	},
	{
		title: 'Gestoras',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				Pessoa repsonsável por publicar editais, coordenar processo de avaliação de projetos, publicar os resultados e monitorar a execução de editais.
			</>
		),
	},
	{
		title: 'Desenvolvedoras',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				Pessoa responsável por manter a infraestrutura e dar manutenção nas tecnologias digitais utilizadas pelas secretarias de cultura.
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
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
