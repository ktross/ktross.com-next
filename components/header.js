import NavPrimary from './nav-primary'
import NavSocial from './nav-social'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isOpen, setisOpen] = React.useState(false);
    return (
        <>
            <div className="w-full text-right bg-white p-4">
                <button onClick={() => setisOpen(!isOpen)}>
                    {!isOpen && (
                        <FontAwesomeIcon className="fill-current text-black h-6" icon={ faBars }/>
                    )}
                    {isOpen && (
                        <FontAwesomeIcon className="fill-current text-black h-6" icon={ faTimes }/>
                    )}
                </button>
            </div>
            <div className="md:flex text-center justify-center w-full px-6 bg-white shadow-sm">
                <header className="md:flex items-center justify-between py-6 w-full max-w-screen-xl">
                    <div className="inline-block text-4xl font-extrabold text-right leading-none tracking-wide">
                        Kyle Ross
                        <div className="text-sm font-normal -mt-1">Full Stack Engineer</div>
                    </div>
                    <NavPrimary linkClass="hover:text-cinnabar-500"/>
                    <NavSocial/>
                </header>
            </div>
        </>
    )
}
