export default function DefaultLayout(props) {
    return (
        <div className="container mx-auto max-w-7xl px-4 lg:px-0 py-8 text-xl">
            {props.children}
        </div>
    )
}