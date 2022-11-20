import { SelectHTMLAttributes } from 'react';

export interface IOptions {
	value: string;
	path: string;
}

export interface SelectProps extends SelectHTMLAttributes<any> {
	// Props for Element
	label?: string;
	options: IOptions[];
	value: string | any;

	onBlur?: () => void;
}

export const Select = ({
	label,
	options,
	value,
	onBlur,
	...rest
}: SelectProps) => {
	const createOptions = () => {
		return options.map((item: IOptions) => (
			<option key={item.path} value={item.path}>
				{item.path}
			</option>
		));
	};

	return (
		<div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full text-gray-100 text-xs focus-within:ring-2 ring-cyan-500">     
				<select 
            className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
						value={value ?? label}
						onChange={(e) => rest.onChange}
						onBlur={onBlur}
						{...rest} >
			{createOptions()}
		</select>
		</div>
	);
};
