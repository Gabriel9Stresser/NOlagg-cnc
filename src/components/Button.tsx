import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}


export function Button({ children, asChild, className, disabled, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
    
        <Comp 
            className={clsx(
                'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-500 focus:ring-2 ring-black disabled:bg-gray-100',
                className,
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </Comp>
    )
}