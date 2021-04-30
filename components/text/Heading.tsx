
export default function Heading({size, className, children}: HeadingProps) {
    let textSize;
    switch (size) {
        case "xl":
            textSize = "text-3xl md:text-4xl lg:text-5xl font-bold"
            break;
        case "lg":
            textSize = "text-xl md:text-3xl lg:text-4xl font-medium"
            break;
        case "md":
            textSize = "text-lg md:text-xl lg:text-2xl font-medium"
            break;
        default:
            textSize = "text-3xl md:text-4xl lg:text-5xl font-bold"
            break;
    }
    return (
        <h1 className={`${textSize} ${className}`}>
            {children}
        </h1>
    )
}

interface HeadingProps {
    size?: string;
    className?: string;
    children: any;
}