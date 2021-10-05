import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitHub, faGithubAlt, faGitlab, faStackOverflow, faStackExchange, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function NavSocial(props) {
    return (
        <div className="text-3xl">
            <Link href="https://github.com/ktross">
                <a target="_blank" className="ml-2"><FontAwesomeIcon icon={ faGithubAlt } className="h-8 inline-block" /></a>
            </Link>
            <Link href="https://gitlab.com/ktross">
                <a target="_blank" className="ml-2"><FontAwesomeIcon icon={ faGitlab } className="h-8 inline-block" /></a>
            </Link>
            <Link href="https://stackoverflow.com/users/158816/ktross">
                <a target="_blank" className="ml-2"><FontAwesomeIcon icon={ faStackOverflow } className="h-8 inline-block" /></a>
            </Link>
            <Link href="https://stackexchange.com/users/53133/ktross">
                <a target="_blank" className="ml-2"><FontAwesomeIcon icon={ faStackExchange } className="h-8 inline-block" /></a>
            </Link>
            <Link href="/">
                <a target="_blank" className="ml-2"><FontAwesomeIcon icon={ faFacebookSquare } className="h-8 inline-block" /></a>
            </Link>
            <Link href="/">
                <a target="_blank" className="ml-2"><FontAwesomeIcon icon={ faLinkedin } className="h-8 inline-block" /></a>
            </Link>
        </div>
    )
}
