export default function DefaultLayout(props) {
    return (
        <div className="container mx-auto max-w-7xl lg:px-0 py-8 text-xl px-2">
            {props.children}
        </div>
    )
}