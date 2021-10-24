import Link from 'next/link'

export default function NavPrimary(props) {
    return (
        <div className={['text-lg font-semibold', props.className].join(' ')}>
            <Link href="/">
                <a className={['ml-3', props.linkClass].join(' ')}>Home</a>
            </Link>
            <Link href="/projects">
                <a className={['ml-3', props.linkClass].join(' ')}>Projects</a>
            </Link>
            {/* <Link href="/blog"> */}
                <a className={['ml-3 line-through cursor-not-allowed', props.linkClass].join(' ')}>Blog</a>
            {/* </Link> */}
            {/* <Link href="/contact"> */}
                <a className={['ml-3 line-through cursor-not-allowed', props.linkClass].join(' ')}>Contact</a>
            {/* </Link> */}
        </div>
    )
}
