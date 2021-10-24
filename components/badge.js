export default function Bio(props) {
    return (
        <span className={['inline-block items-center px-2 py-0.5 rounded-md text-sm text-white mr-1 mb-1 opacity-80 hover:opacity-100 cursor-default', props.className].join(' ')}>
            {props.children}
        </span>
    )
}
