import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar(Props: HtmlHTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = Props;
    return (
        <div className={twMerge("size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-500", className)} {...otherProps}>
            {children}
        </div>
    );
}
