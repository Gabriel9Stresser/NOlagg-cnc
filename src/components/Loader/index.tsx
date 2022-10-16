import {Audio} from 'react-loader-spinner';

import { DivStyled } from './styles';

export const CNCLoader = () => {
	return (
		<DivStyled data-testid="loader">
			<Audio color="#81D8F7" height={80} width={80} />
		</DivStyled>
	);
};
