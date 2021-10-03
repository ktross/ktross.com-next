import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGitHub, faGitlab, faStackOverflow, faStackExchange, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Layout({ children }) {
    return (
      <>
        {/* <Navbar /> */}
        <div class="bg-gray-100">
            {/* <FontAwesomeIcon icon={ faFacebook } className="h-8" /> */}
            <main>{children}</main>
        </div>
        {/* <Footer /> */}
      </>
    )
  }
