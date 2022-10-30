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
import { HeroCardLoader } from '../components/HeroCard/HeroCardLoader';
import { Spaces } from '../shared/DesignTokens';
import  useAxios  from 'axios-hooks';
import { useHeroes } from '../hooks/useHeroes';

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
	const [search, setSearch] = React.useState({
		value: 'captain',
		doSearch: false,
	});

	const { heroes, searchHero,isLoadingHeroes } = useHeroes(search.value);

	React.useEffect(() => {
		if (search.doSearch) {
			searchHero().then(() => {
				setSearch((prevValue) => ({ ...prevValue, doSearch: false}));
			});
		}
	}, [search]);

	function handleUpdateSearchValue({ target: { value} }) {
		setSearch((prevValue) => ({ ...prevValue, value}));
	}

	function handleSearch() {
		setSearch((prevValue) => ({ ...prevValue, doSearch: true}));
	}

	return (
		<>
			<Flex
				width={['100%', '600px']}
				mx={[Spaces.NONE, 'auto']}
				mt={[Spaces.THREE, Spaces.FIVE]}
				px={[Spaces.ONE, Spaces.NONE]}
				mb={[Spaces.TWO, Spaces.FOUR]}
			>
				<Box flexGrow="1">
					<SearchField placeholder="Digite um nome de herói ou heroína"
					onKeyUp={handleUpdateSearchValue} />
				</Box>
				<Box ml={Spaces.TWO}>
					<Button onClick={handleSearch}>Buscar</Button>
				</Box>
			</Flex>
			{!isLoadingHeroes && heroes && heroes.error ? (
			<Box
				px={[Spaces.ONE, Spaces.TWO]}
				pb={[Spaces.ONE, Spaces.TWO]}
			>
				<Alert type="info">
					Nenhum registro de herói ou heroína foi encontrado.
				</Alert>
			</Box>
		) : (
			<HeroesGrid
				px={[Spaces.ONE, Spaces.TWO]}
				pb={[Spaces.ONE, Spaces.TWO]}
			>
				{isLoadingHeroes && (
					<>
						<HeroCardLoader />
						<HeroCardLoader />
						<HeroCardLoader />
						<HeroCardLoader />
					</>
				)}
				{!isLoadingHeroes &&
					heroes &&
					heroes.results.map((hero) => (
						<HeroCard
							key={hero.id}
							id={hero.id}
							secretIdentity={hero.biography['full-name']}
							name={hero.name}
							picture={hero.image.url}
							universe={hero.biography.publisher}
						/>
					))}
			</HeroesGrid>
		)}
	</>
	);
}
