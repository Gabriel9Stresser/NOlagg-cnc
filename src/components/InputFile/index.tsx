import clsx from 'clsx';
import { HTMLProps } from 'react';
import { LabelStyled, SpanStyled } from './styles';

export interface InputProps extends HTMLProps<HTMLInputElement> {
	// Props for Element
	label?: string;
	placeholder?: string;
	currency?: boolean;
	mask?: string;
	maskChar?: string;
	type?: string;
	value?: any;
	id?: string;
	disabled?: boolean;
	className?: string;
	dataTestID?: string;
	toolTip?: HTMLElement | undefined;
	inputRef?: React.RefObject<HTMLInputElement>;
	accept?: string;
	// Is it controlled?
	controlled?: boolean;

	// Functions
	onBlur?: (event: any) => void;
	onChange?: (event: any) => void;
	onFocus?: (value: any) => void;
	onKeyPress?: (value: any) => void;
}

export function InputFile({
	placeholder,
	disabled,
	name,
	id,
	dataTestID,
	onBlur,
	onChange,
	inputRef,
	accept,
	className,
}: InputProps) {
	return (
		<LabelStyled className={clsx(
			'py-3 px-4 mt-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-500 focus:ring-2 ring-black',
			className,
	)}>
			<input
				disabled={disabled}
				name={name}
				id={id}
				data-testid={dataTestID}
				ref={inputRef}
				className={className}
				accept={accept}
				type="file"
				onBlur={onBlur}
				onChange={onChange}
				
			/>
			<SpanStyled className={clsx(
			'font-semibold text-black text-sm transition-colors',
			className,
	)}>{placeholder}</SpanStyled>
		</LabelStyled>
	);
}
