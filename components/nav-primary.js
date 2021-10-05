import Link from 'next/link'

export default function NavPrimary(props) {
    return (
        <div className="text-lg font-semibold">
            <Link href="/">
                <a className={['ml-3', props.linkClass].join(' ')}>Home</a>
            </Link>
            <Link href="/blog">
                <a className={['ml-3', props.linkClass].join(' ')}>Blog</a>
            </Link>
            <Link href="/projects">
                <a className={['ml-3', props.linkClass].join(' ')}>Projects</a>
            </Link>
            <Link href="/contact">
                <a className={['ml-3', props.linkClass].join(' ')}>Contact</a>
            </Link>
        </div>
    )
}
