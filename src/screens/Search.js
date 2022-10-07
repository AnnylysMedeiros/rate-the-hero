import { Button } from '../common-components/Button/Button';
import { Header } from '../common-components/Header/Header';
import { SearchField } from '../common-components/SearchField/SearchField';

export function Search() {
	return (
		<div>
			<Header />
			<SearchField placeholder="Digite um nome de herói ou heroína" />
			<Button>Buscar</Button>
		</div>
	);
}