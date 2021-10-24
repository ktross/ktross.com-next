import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faGitlab, faStackOverflow, faStackExchange, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function NavSocial(props) {
    return (
        <div className={['flex items-center justify-end space-x-4', props.className].join(' ')}>
            <a href="https://github.com/ktross" target="_blank" className={['', props.linkClass].join(' ')} rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faGithubAlt } className="inline-block" size="2x" />
            </a>
            <a href="https://gitlab.com/ktross" target="_blank" className={['', props.linkClass].join(' ')} rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faGitlab } className="h-12 inline-block" size="2x" />
            </a>
            <a href="https://stackoverflow.com/users/158816/ktross" target="_blank" className={['', props.linkClass].join(' ')} rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faStackOverflow } className="inline-block" size="2x" />
            </a>
            <a href="https://stackexchange.com/users/53133/ktross" target="_blank" className={['', props.linkClass].join(' ')} rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faStackExchange } className="inline-block" size="2x" />
            </a>
            <a href="https://www.facebook.com/kyle.t.ross/" target="_blank" className={['', props.linkClass].join(' ')} rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faFacebookSquare } className="inline-block" size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/kyleross/" target="_blank" className={['', props.linkClass].join(' ')} rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faLinkedin } className="inline-block" size="2x" />
            </a>
        </div>
    )
}
