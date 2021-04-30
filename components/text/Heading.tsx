import { ReactChildren } from "react";

export default function Heading({size, className, children}: HeadingProps) {
    let textSize;
    switch (size) {
        case "xl":
            textSize = "text-3xl md:text-4xl lg:text-5xl"
            break;
        case "lg":
            textSize = "text-xl md:text-2xl lg:text-3xl"
            break;
        case "md":
            textSize = "text-lg md:text-xl lg:text-2xl"
            break;
        default:
            textSize = "text-3xl md:text-4xl lg:text-5xl"
            break;
    }
    return (
        <h1 className={`${textSize} ${className} font-bold`}>
            {children}
        </h1>
    )
}

interface HeadingProps {
    size?: string;
    className?: string;
    children: any;
}