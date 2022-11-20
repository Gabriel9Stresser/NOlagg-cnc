import styled from 'styled-components';

export const SelectsStyled = styled.select`
	border: 1px solid rgba(10, 10, 10, 0.1);
	border-radius: 4px;
	padding: 14px 20px;
	font-size: 0.85rem;
	width: 100%;
	background-color: white;
`;

export const ErrorDivStyled = styled.div`
	max-width: 500px;
	margin-bottom: 3px;
`;

export const ErrorStyled = styled.small`
	font-family: 'Montserrat';
	font-size: 15px;
	text-align: start;
	color: hsl(348, 100%, 61%);
	hyphens: auto;
`;
