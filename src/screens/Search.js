import React from 'react';
import { Header } from '../common-components/Header/Header';
import { Button } from '../common-components/Button/Button';
import { ButtonLink } from '../common-components/ButtonLink/ButtonLink';
import { Caption } from '../common-components/Caption/Caption';
import { Card } from '../common-components/Card/Card';
import { Description } from '../common-components/Description/Description';
import { HeadingOne } from '../common-components/HeadingOne/HeadingOne';
import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
import { Subtitle } from '../common-components/Subtitle/Subtitle';
import { SearchField } from '../common-components/SearchField/SearchField';
import { SelectField, Option, } from '../common-components/SelectField/SelectField';
import { Alert } from '../common-components/Alert/Alert';
import { Flex, Box } from 'reflexbox';
import styled from 'styled-components';
import { HeroCard } from '../components/HeroCard/HeroCard';
import { Spaces } from '../shared/DesignTokens';


const HeroesGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${Spaces.ONE_HALF};
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: ${Spaces.TWO};
	}
`;
export function Search() {
	const initialState = [
		{
			secretIdentity: 'Terry McGinnis',
			name: 'Batman',
			picture:
				'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
			universe: 'DC Comics',
		},
		{
			secretIdentity: 'Bruce Wayne',
			name: 'Batman',
			picture:
				'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
			universe: 'DC Comics',
		},
		{
			secretIdentity: 'Dick Grayson',
			name: 'Batman II',
			picture:
				'https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg',
			universe: 'DC Comics',
		},
	];
	const [heroes, setHeroes] = React.useState(initialState);

	return (
		<>
			<Flex
				width={['100%', '600px']}
				mx={[Spaces.None, 'auto']}
				mt={[Spaces.THREE, Spaces.FIVE]}
				px={[Spaces.ONE, Spaces.NONE]}
				mb={[Spaces.TWO, Spaces.FOUR]}
			>
				<Box flexGrow="1">
					<SearchField placeholder="Digite um nome de herói ou heroína" />
				</Box>
				<Box ml={Spaces.TWO}>
					<Button>Buscar</Button>
				</Box>
			</Flex>
			<HeroesGrid
				px={[Spaces.ONE, Spaces.TWO]}
				pb={[Spaces.ONE, Spaces.TWO]}
			>
				{heroes.map((hero) => (
					<HeroCard
						secretIdentity={hero.secretIdentity}
						name={hero.name}
						picture={hero.picture}
						universe={hero.universe}
					/>
				))}
			</HeroesGrid>
		</>
	);
}